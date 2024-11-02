import { Button, Flex, IconButton } from "@radix-ui/themes"
import { Heart, ShoppingCart } from "lucide-react"
import { useState } from "react"


export const ProductBuy = () => {

    const [isLike, setIsLike] = useState(false)

    return (
        <Flex align="center" gap='4'>
            <IconButton variant="ghost" radius='full' color={isLike ? 'ruby' : 'gray'} onClick={() => setIsLike(!isLike)}>
                <Heart />
            </IconButton>
            <Button color='ruby' size='4' radius='none'><ShoppingCart />Add to cart</Button>
        </Flex>
    )
}