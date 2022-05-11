import React from 'react'
import { getFeturedEvents } from '../dummy-data'
import EventList from '../components/events/event-list'

const HomePage = () => {
    const featuredEvents = getFeturedEvents();

    return (
        <div>
            <EventList items={featuredEvents}></EventList>
        </div>
    )
}

export default HomePage