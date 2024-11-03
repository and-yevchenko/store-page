import { Menu, X } from 'lucide-react';
import './Nav.css';
import { useState } from 'react';

export const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <nav className={`${'nav'} ${openMenu ? '_active' : ''}`}>
                <a href="#" className="nav-link">
                    Home
                </a>
                <a href="#" className="nav-link">
                    Сlothes
                </a>
                <a href="#" className="nav-link">
                    Equipment
                </a>
                <a href="#" className="nav-link">
                    Nutrition
                </a>
                <a href="#" className="nav-link">
                    About
                </a>
            </nav>
            <button type="button" className="nav-button" onClick={() => setOpenMenu(!openMenu)}>
                {openMenu ? <X /> : <Menu />}
            </button>
        </>
    );
};
