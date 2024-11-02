import { Box, Button, Flex, IconButton, ScrollArea, Select, Strong, Tabs, Text } from '@radix-ui/themes'
import './Description.css'
import { Heart, ShoppingCart } from 'lucide-react'
import { ProductName } from '../Product/ProductName'
import { ProductSize } from '../Product/ProductSize'
import { ProductChoose } from '../Product/ProductChoose'
import { ProductTabs } from '../Product/ProductTabs'

export const Description = ({data}) => {

    return (
        <div className='description'>
            <ProductName data={data}/>
            <ProductSize data={data}/>
            <ProductChoose data={data}/>
            <ProductTabs data={data}/>
           

            

            <Flex gap="1" gapX='9'>
                <Box>
                    <Text as='div' size="2" weight='medium' color='ruby'>Selling price:</Text>
                    <Text as='div' size="6" style={{color: 'var(--color-main)'}}>USD <Strong>150$</Strong></Text>
                </Box>
                <Flex align="center" gap='4'>
                    <IconButton variant="ghost" radius='full' color='gray'>
                        <Heart />
                    </IconButton>
                    <Button color='ruby' size='4' radius='none'><ShoppingCart />Add to cart</Button>
                </Flex>
            </Flex>
        </div>
    )
}