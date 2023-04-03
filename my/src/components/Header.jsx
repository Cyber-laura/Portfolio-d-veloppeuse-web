import { useState } from 'react';
import { Link, } from 'react-router-dom'

import logo from '../assets/Logo-light.png'

import '../assets/styles/_header.scss'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLogoLight, setIsLogoLight] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIsLogoLight(!isLogoLight);
    };
    return (
        <header className="Header-bloc">
            <Link to="/">
                <img src={logo} alt='logo' />
            </Link>
            <button className="menu-button" onClick={toggleMenu}>
                {isLogoLight !== false ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 448 512"><path fill="#c1876f" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                ) : (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 320 512"><path fill="#c1876f" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" /></svg>)}

            </button>
            <nav className={`menu-list ${isOpen ? "open" : ""}`}>
                <ul>
                    <li>
                        <a href='/#Welcome'>Bienvenue</a>
                    </li>
                    <li>
                        <a href='/#Parcours'>Parcours</a>
                    </li>
                    <li>
                        <a href='/#Projets'>Projets</a>
                    </li>
                    <li>
                        <a href='/#Contact'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;