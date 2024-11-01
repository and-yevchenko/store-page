import { Box, Button, Flex, Heading, IconButton, RadioCards, ScrollArea, Select, Strong, Tabs, Text } from '@radix-ui/themes'
import './Description.css'
import { Heart, ShoppingCart } from 'lucide-react'

export const Description = () => {

    return (
        <div className='description'>
            <Box>
                <Heading as='h2' style={{color: 'var(--color-main)'}}>UCL Men&apos;s home jersey 24/25 FC Barcelona</Heading>
                <Text as='p' mt='1' style={{color: 'var(--color-main)'}}>FC Barcelona home shirt from the 24/25 season</Text>
            </Box>

            <Box as='div' width="fit-content">
                <Flex direction='column' gap="1" align="start">
                    <Text as='label' weight="medium" style={{color: 'var(--color-main)'}}>Size</Text>
                    <RadioCards.Root columns='7' color='gray' size='1' required>
                        <RadioCards.Item value='1' style={{backgroundColor: 'var(--color-transparent)'}}>
                            <Text as='span' weight='medium' size='3' style={{color: 'var(--color-main)'}}>XS</Text>
                        </RadioCards.Item>
                        <RadioCards.Item value='2' style={{backgroundColor: 'var(--color-transparent)'}}>
                            <Text as='span' weight='medium' size='3' style={{color: 'var(--color-main)'}}>S</Text>
                        </RadioCards.Item>
                        <RadioCards.Item value='3' style={{backgroundColor: 'var(--color-transparent)'}}>
                            <Text as='span' weight='medium' size='3' style={{color: 'var(--color-main)'}}>M</Text>
                        </RadioCards.Item>
                        <RadioCards.Item value='4' style={{backgroundColor: 'var(--color-transparent)'}}>
                            <Text as='span' weight='medium' size='3' style={{color: 'var(--color-main)'}}>L</Text>
                        </RadioCards.Item>
                        <RadioCards.Item value='5' style={{backgroundColor: 'var(--color-transparent)'}}>
                            <Text as='span' weight='medium' size='3' style={{color: 'var(--color-main)'}}>XL</Text>
                        </RadioCards.Item>
                        <RadioCards.Item value='6' style={{backgroundColor: 'var(--color-transparent)'}}>
                            <Text as='span' weight='medium' size='3' style={{color: 'var(--color-main)'}}>2XL</Text>
                        </RadioCards.Item>
                        <RadioCards.Item value='7' style={{backgroundColor: 'var(--color-transparent)'}}>
                            <Text as='span' weight='medium' size='3' style={{color: 'var(--color-main)'}}>3XL</Text>
                        </RadioCards.Item>
                    </RadioCards.Root>
                </Flex>
            </Box>

            <Box as='div'>
                <Flex direction='column' gap="1" align="start">
                    <Text as='label' weight="medium" style={{color: 'var(--color-main)'}}>Choose player</Text>
                    <Select.Root size="3" defaultValue='choose'>
                        <Select.Trigger color='gray' />
                        <Select.Content color='gray'>
                            <Select.Item value='choose'>Choose player</Select.Item>
                            <Select.Item value='19'>Lamine Yamal 19</Select.Item>
                        </Select.Content>
                    </Select.Root>
                </Flex>
            </Box>

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