import { Box, Strong, Text } from '@radix-ui/themes';
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

export const ProductPrice = ({ data }) => {
    const { price, choosePrice } = data;
    const { plusPriсeChoose } = useContext(ProductContext);

    return (
        <Box>
            <Text as="div" size="2" weight="medium" color="ruby">
                Selling price:
            </Text>
            <Text as="div" size="6" style={{ color: 'var(--color-main)' }}>
                USD{' '}
                <Strong>
                    {plusPriсeChoose > 0 ? price + choosePrice : price}$
                </Strong>
            </Text>
        </Box>
    );
};
