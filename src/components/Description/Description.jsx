import { Box, Button, Flex, IconButton, ScrollArea, Select, Strong, Tabs, Text } from '@radix-ui/themes'
import './Description.css'
import { Heart, ShoppingCart } from 'lucide-react'
import { ProductName } from '../Product/ProductName'
import { ProductSize } from '../Product/ProductSize'
import { ProductChoose } from '../Product/ProductChoose'

export const Description = ({data}) => {

    return (
        <div className='description'>
            <ProductName data={data}/>
            <ProductSize data={data}/>
            <ProductChoose data={data}/>
           

            <Box>
                <Tabs.Root defaultValue='suggestions'>
                    <Tabs.List color='gray'>
                        <Tabs.Trigger value='descripton' style={{color: 'var(--color-main)'}}>Description</Tabs.Trigger>
                        <Tabs.Trigger value='suggestions' style={{color: 'var(--color-main)'}}>Suggestions</Tabs.Trigger>
                        <Tabs.Trigger value='shipment' style={{color: 'var(--color-main)'}}>Shipment</Tabs.Trigger>
                    </Tabs.List>
                    <ScrollArea type="auto" scrollbars="vertical" style={{ height: 120 }}>
                        <Box pt="3">
                            <Tabs.Content value="descripton">
                                <Text as='p' size="2" style={{color: 'var(--color-main)'}}>- Nike Dri-FIT technology</Text>
                                <Text as='p' size="2" style={{color: 'var(--color-main)'}}>- High-stretch, quick-drying fabric</Text>
                                <Text as='p' size="2" style={{color: 'var(--color-main)'}}>- 100% recycled polyester</Text>
                                <Text as='p' size="2" style={{color: 'var(--color-main)'}}>- Color: Blue and scarlet.</Text>
                            </Tabs.Content>
                            <Tabs.Content value="suggestions">
                                <Text size="2">Access and update your documents.</Text>
                            </Tabs.Content>
                            <Tabs.Content value="shipment">
                                <Text as='p' size="2" style={{color: 'var(--color-main)'}}>The delivery timeframe for personalized products is 7 to 14 days.</Text>
                                <Text as='p' size="2" style={{color: 'var(--color-main)'}}>This product cannot be exchanged or returned.</Text>
                            </Tabs.Content>
                        </Box>
                    </ScrollArea>
                </Tabs.Root>
            </Box>

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