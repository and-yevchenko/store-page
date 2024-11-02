import { Box, Flex, RadioCards, Text } from "@radix-ui/themes"

export const ProductSize = ({ data }) => {
    const { size } = data

    return (
        <Box as='div' width="fit-content">
            <Flex direction='column' gap="1" align="start">
                <Text as='label' weight="medium" style={{color: 'var(--color-main)'}}>Size</Text>
                <RadioCards.Root columns='7' color='gray' size='1' required>
                    {Object.entries(size).map((sz, index) => (
                        <RadioCards.Item key={sz[0]} value={index}  disabled={!sz[1] ? true : undefined} style={{backgroundColor: 'var(--color-transparent)'}}>
                            <Text as='span' weight='medium' size='3' style={{color: 'var(--color-main)'}}>{sz[0]}</Text>
                        </RadioCards.Item>
                    ))}
                </RadioCards.Root>
            </Flex>
        </Box>
    )
}