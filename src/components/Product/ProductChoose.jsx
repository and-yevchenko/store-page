import { Box, Flex, Select, Text } from "@radix-ui/themes"

export const ProductChoose = ({ data }) => {

    const { players, choosePrice } = data

    return (
        <Box as='div'>
            <Flex direction='column' gap="1" align="start">
                <Flex direction="raw" gap='6' justify='center'>
                    <Text as='label' weight="medium" style={{color: 'var(--color-main)'}}>Choose player</Text>
                    <Text as='div' weight="bold" color="ruby">+{choosePrice}$ USD</Text>
                </Flex>
                <Select.Root size="3" defaultValue='choose'>
                    <Select.Trigger color='gray' />
                    <Select.Content color='gray'>
                        <Select.Item value='choose'>Choose player</Select.Item>
                        {players.map((player, index) => (
                            <Select.Item value={index + 1} key={index + 1}>{player}</Select.Item>
                        ))}
                    </Select.Content>
                </Select.Root>
            </Flex>
        </Box>
    )
}