import { Button, Flex, IconButton } from '@radix-ui/themes';
import { Heart, ShoppingCart } from 'lucide-react';
import { useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';

export const ProductBuy = () => {
    const [isLike, setIsLike] = useState(false);
    const { setIsFullCart } = useContext(ProductContext);

    return (
        <Flex align="center" gap="4">
            <IconButton
                variant="ghost"
                radius="full"
                color={isLike ? 'ruby' : 'gray'}
                onClick={() => setIsLike(!isLike)}
            >
                <Heart />
            </IconButton>
            <Button
                color="ruby"
                size="4"
                radius="none"
                onClick={() => setIsFullCart((prev) => prev + 1)}
            >
                <ShoppingCart />
                Add to cart
            </Button>
        </Flex>
    );
};
