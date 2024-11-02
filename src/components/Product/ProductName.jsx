import { Box, Heading, Text } from "@radix-ui/themes"

export const ProductName = ({ data }) => {

    const { nameProduct, infoProduct } = data

    return (
        <Box>
            <Heading as='h2' style={{color: 'var(--color-main)'}}>{nameProduct}</Heading>
            <Text as='p' mt='1' style={{color: 'var(--color-main)'}}>{infoProduct}</Text>
        </Box>
    )
}