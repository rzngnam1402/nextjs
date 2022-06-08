import React, { useEffect, useState } from 'react'

const LastSalesPage = () => {
    const [sales, setSales] = useState();
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        setisLoading(true);
        fetch('https://nextjs-course-2d22f-default-rtdb.asia-southeast1.firebasedatabase.app/Sales.json')
            .then((res) => res.json())
            .then(data => {
                const transformedSales = [];
                for (const key in data) {
                    transformedSales.push({
                        id: key,
                        username: data[key].username,
                        volume: data[key].volume
                    })
                }
                setSales(transformedSales);
                setisLoading(false);
            })
    }, []);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (!sales) {
        return <p>No data</p>
    }

    return (
        <ul>
            {sales.map(sale => <li key={sale.id}>{sale.username} - ${sale.volume}</li>)}
        </ul>
    )
}

export default LastSalesPage