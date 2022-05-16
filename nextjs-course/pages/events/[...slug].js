import React from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy-data';

const FilteredEventsPage = () => {
    const router = useRouter();
    const filterData = router.query.slug;

    console.log(filterData);

    if (!filterData) {
        return <p className='center'>Loading...</p>
    }

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12) {
        return <h1 className='center'>Invalid filter. Please adjust your values! </h1>
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return <h1 className='center'>No events found for the chosen filter</h1>
    }

    return (
        <div><h1>Filtered Events</h1></div>
    )
}

export default FilteredEventsPage