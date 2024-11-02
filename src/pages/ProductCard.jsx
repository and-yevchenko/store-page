import './ProductCard.css'
import { Images } from './../components/Images/Images';
import { Description } from './../components/Description/Description';
import { useEffect, useState } from 'react';
import { Flex, Spinner, Text } from '@radix-ui/themes';

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

    if (loading) return (
        <Flex width='100%' height='100%' direction='column' align='center' justify='center' gap='4'>
            <Spinner size='3'></Spinner>
            <Text size='8' weight='medium' style={{color: 'var(--color-main)'}}>Loading</Text>
        </Flex>
    );
    if (error) return (
        <Flex width='100%' height='100%' direction='column' align='center' justify='center' gap='4'>
            <Text size='9' weight='medium' style={{color: 'var(--color-main)'}}>404</Text>
            <Text size='6' weight='medium' color='ruby'>Error: Not Found</Text>
        </Flex>
    )

    return (
        <section className='product-card'>
          <div className='slider'>
            <Images />
          </div>
          <Description data={data[0]}/>
        </section>
    )
}