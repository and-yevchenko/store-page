import './ProductCard.css'
import { Images } from './../components/Images/Images';
import { Description } from './../components/Description/Description';
import { useEffect, useState } from 'react';

export const ProductCard = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch('src/data/data.json')
                if (!response.ok) {
                    throw new Error('Failed to upload data')
                }
                const data = await response.json()
                setData(data)
            } catch(err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        } 
        fetchData()
    }, [])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <main className='main'>
          <div className='slider'>
            <Images />
          </div>
          <Description data={data[0]}/>
        </main>
    )
}