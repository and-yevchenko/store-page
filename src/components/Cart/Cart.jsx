import { ShoppingCart } from 'lucide-react';
import './Cart.css';
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

export const Cart = () => {
    const { isFullCart } = useContext(ProductContext);

    return (
        <button type="button" className="cart">
            <ShoppingCart className="cart-icon" />
            {isFullCart > 0 && <div className="cart-full">{isFullCart}</div>}
        </button>
    );
};
