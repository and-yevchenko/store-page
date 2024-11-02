import { ShoppingCart } from 'lucide-react'
import './Cart.css'

export const Cart = () => {

    return (
        <button type='button' className='cart'>
            <ShoppingCart className='cart-icon'/>
            <div className='cart-full'>2</div>
        </button>
    )
}