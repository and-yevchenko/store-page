import { Logo } from '../Logo/Logo'
import './Header.css'
import { Nav } from '../Nav/Nav'


export const Header = () => {

    return (
        <header className='header'>
            <div className='header-container'>
                <Logo />
                <Nav />
            </div>
        </header>
    )
}