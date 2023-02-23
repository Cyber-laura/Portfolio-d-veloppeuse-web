import logo from '../assets/Logo-light.png'

import '../assets/styles/_header.scss'

function Header() {
    return (
        <header className="Header-bloc">
            <img src={logo} alt='logo de kasa' />
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