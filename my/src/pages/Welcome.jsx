import portrait from '../assets/portrait.jpg'
import { Link } from 'react-router-dom'

import '../assets/styles/_welcome.scss'

function Home() {
    return (
        <>
            <section id='Welcome'>
                <h1>Bienvenue</h1>
                <div className="welcome-div">
                    <img src={portrait} alt='Profil' />
                    <p className="welcome-text">Je suis intégratrice, développeuse junior passionnée, motivée et déterminée, récemment diplômée d'une formation en informatique.<br />
                        Avec une forte volonté d'apprendre et de progresser, j'ai acquis des compétences en développement web/mobile et en résolution de problèmes, spécialisée dans les technologies tels que <strong>React, TypeScript, NodeJS, HTML et CSS</strong>.<br />
                        Grâce à ma curiosité et à ma soif de connaissances, je suis capable de m'adapter rapidement à de nouveaux outils et technologies. <br /> En travaillant avec rigueur et méthode, je suis capable de relever de nouveaux défis et de trouver des solutions innovantes aux problèmes complexes.<br />
                        Je possède également d'excellentes qualités relationnelles. Je suis capable de travailler en équipe, de communiquer efficacement et de m'adapter à différents environnements de travail.<br />
                        Je suis prête à saisir toutes les opportunités qui me seront offertes pour continuer à me perfectionner et à progresser dans ma carrière.</p>
                </div>
            </section>
            <section id="Parcours">
                <h1>Parcours</h1>
                <div className="parcours_div">
                    <div>
                        <span>icone</span>
                        <span>2022-2023</span>
                        <div className="parcours_description">
                            <h2>Formation Développeuse Web</h2>
                            <h3>OpenClassrooms | Angers</h3>
                            <div>
                                <p>6 mois - 7 projets réalisés</p>
                                <p>Compétences développées:</p>
                                <ul>
                                    <li><strong>Intégration d'une maquette</strong> en site web <br /> (HTML5 / CSS3)</li>
                                    <li><strong>Dynamisation d'un site web</strong> avec des animations CSS <br /> (HTML5 / SASS)</li>
                                    <li><strong>Optimisation du référencement SEO</strong> d'un site web existant <br /> (HTML5 / CSS3 / JavaScript)</li>
                                    <li><strong>Création d'un site e-commerce</strong> <br /> (JavaScript)</li>
                                    <li><strong>Construction d'une API sécurisée</strong> <br /> (NodeJS / Express / Mongo DB / Postman)</li>
                                    <li><strong>Création d'une application web</strong> de location immobilière <br /> (NodeJS / ReactJS)</li>

                                </ul>
                                <p>Consultez mon CV</p>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </section>
            <section id="Projets">
                <h1>Projets</h1>
                <div className="Projet-items" >
                    <Link></Link>
                </div>
            </section>
            <section id="Contact">
                <h1>Contact</h1>
                <form></form>
            </section>
        </>
    )
}
export default Home;