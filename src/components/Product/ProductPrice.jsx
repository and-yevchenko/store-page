import { Box, Strong, Text } from "@radix-ui/themes"


export const ProductPrice = ({ data }) => {
    const { price } = data

    return (
        <Box>
            <Text as='div' size="2" weight='medium' color='ruby'>Selling price:</Text>
            <Text as='div' size="6" style={{color: 'var(--color-main)'}}>USD <Strong>{price}$</Strong></Text>
        </Box>
    )
}