import React, { useEffect, useState } from 'react'
import useSWR from 'swr';

const LastSalesPage = (props) => {
    const [sales, setSales] = useState(props.sales);
    // const [isLoading, setisLoading] = useState(false);

    const { data, error } = useSWR('https://nextjs-course-2d22f-default-rtdb.asia-southeast1.firebasedatabase.app/Sales.json',
        (url) => fetch(url).then(res => res.json()));

    useEffect(() => {
        if (data) {
            const transformedSales = [];
            for (const key in data) {
                transformedSales.push({
                    id: key,
                    username: data[key].username,
                    volume: data[key].volume
                })
            }

            setSales(transformedSales);
        }
    }, [data])
    // useEffect(() => {
    //     setisLoading(true);
    //     fetch('https://nextjs-course-2d22f-default-rtdb.asia-southeast1.firebasedatabase.app/Sales.json')
    //         .then((res) => res.json())
    //         .then(data => {
    //             const transformedSales = [];
    //             for (const key in data) {
    //                 transformedSales.push({
    //                     id: key,
    //                     username: data[key].username,
    //                     volume: data[key].volume
    //                 })
    //             }
    //             setSales(transformedSales);
    //             setisLoading(false);
    //         })
    // }, []);

    if (error) {
        return <p>Failed to load</p>
    }

    if (!data && !sales) {
        return <p>Loading...</p>
    }

    return (
        <ul>
            {sales.map(sale => <li key={sale.id}>{sale.username} - ${sale.volume}</li>)}
        </ul>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://nextjs-course-2d22f-default-rtdb.asia-southeast1.firebasedatabase.app/Sales.json',
        (url) => fetch(url).then((res) => res.json()))
    const data = await response.json();

    const transformedSales = [];
    for (const key in data) {
        transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume
        })
    }

    return { props: { sales: transformedSales }, revalidate: 10 }
}

export default LastSalesPage