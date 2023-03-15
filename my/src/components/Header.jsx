import logo from '../assets/Logo-light.png'

import { Link, } from 'react-router-dom'

import '../assets/styles/_header.scss'

function Header() {
    return (
        <header className="Header-bloc">
            <Link to="/">
                <img src={logo} alt='logo' />
            </Link>
            <nav>
                <ul>
                    <li>
                        <a href='#Welcome'>Bienvenue</a>
                    </li>
                    <li>
                        <a href='#Parcours'>Parcours</a>
                    </li>
                    <li>
                        <a href='#Projets'>Projets</a>
                    </li>
                    <li>
                        <a href='#Contact'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;