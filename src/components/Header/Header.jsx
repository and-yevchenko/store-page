import { Logo } from '../Logo/Logo';
import './Header.css';
import { Nav } from '../Nav/Nav';
import { Cart } from '../Cart/Cart';

export const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <Logo />
                <Nav />
                <Cart />
            </div>
        </header>
    );
};
