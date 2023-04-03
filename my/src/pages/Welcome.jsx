import portrait from '../assets/portrait-laura.png';
import LinkProjets from '../components/LinkProjets';
import Bannière from '../components/Bannière';
import FormContact from '../components/Contact'
import cards from '../data'


import '../assets/styles/_welcome.scss'

import React from "react";
import { faCode, faFutbol, faMugSaucer, faGraduationCap, faFolderOpen, faMessage } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Home() {
    function handleScroll() {
        const slidingNewsletters = document.querySelectorAll('.parcours_div');
        const slidingIcons = document.querySelectorAll('.parcours_icons');
        if (!slidingNewsletters) {
            return;
        }
        const { scrollTop, clientHeight } = document.documentElement;
        slidingNewsletters.forEach((newsletter, index) => {
            const TopElementToTopViewport = newsletter.getBoundingClientRect().top;

            if (scrollTop > (scrollTop + TopElementToTopViewport).toFixed() - clientHeight * 0.80) {
                newsletter.classList.add('active');
                slidingIcons[index].classList.add('active');
            }
        });

        if (document.querySelectorAll('.parcours_div.active').length === slidingNewsletters.length) {
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);

    return (
        <>
            <section id="Welcome">
                <Bannière></Bannière>
            </section>
            <section id="Parcours">
                <h1>Mon parcours</h1>
                <div className="welcome-div">
                    <img src={portrait} alt='Profil' />
                    <p className="welcome-text">Je suis intégratrice, développeuse web et mobile passionnée, motivée et déterminée, récemment diplômée d'une formation en développement web.<br />
                        Avec une forte volonté d'apprendre et de progresser, j'ai acquis des compétences en développement informatique et en résolution de problèmes, spécialisée dans les technologies tels que <strong>React, TypeScript, NodeJS, HTML et CSS</strong>.<br />
                        Grâce à ma curiosité et à ma soif de connaissances, je suis capable de m'adapter rapidement à de nouveaux outils et technologies. En travaillant avec rigueur et méthode, je suis capable de relever de nouveaux défis et de trouver des solutions innovantes aux problèmes complexes.<br />
                        Je possède également d'excellentes qualités relationnelles. Je suis capable de travailler en équipe, de communiquer efficacement et de m'adapter à différents environnements de travail.<br />
                        Je suis prête à saisir toutes les opportunités qui me seront offertes pour continuer à me perfectionner et à progresser dans ma carrière.</p>
                </div>
            </section>
            <section>
                <div className="parcours_container">
                    <div className="parcours_div">
                        <span className="parcours_icons"><FontAwesomeIcon icon={faCode} title="Coding icon" /></span>
                        <span className="parcours_date"> juin 2022 - février 2023</span>
                        <div className="parcours_description">
                            <div className="parcours_fleche_right"></div>
                            <h2>Formation Développeuse Web</h2>
                            <h3>OpenClassrooms | Angers</h3>
                            <div className="parcours_div_skills">
                                <p>8 mois - 6 projets réalisés</p>
                                <p>Compétences développées:</p>
                                <ul>
                                    <li><strong>Intégration d'une maquette</strong> en site web <br /> (HTML5 / CSS3)</li>
                                    <li><strong>Dynamisation d'un site web</strong> avec des animations CSS <br /> (HTML5 / SASS)</li>
                                    <li><strong>Optimisation du référencement SEO</strong> d'un site web existant <br /> (HTML5 / CSS3 / JavaScript)</li>
                                    <li><strong>Création d'un site e-commerce</strong> <br /> (JavaScript)</li>
                                    <li><strong>Construction d'une API sécurisée</strong> <br /> (NodeJS / Express / Mongo DB / Postman)</li>
                                    <li><strong>Création d'une application web</strong> de location immobilière <br /> (NodeJS / ReactJS)</li>
                                </ul>
                                <div className="parcours_div_button">
                                    <a href='#Projets'>
                                        <button>
                                            <span>Voir les projets</span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="parcours_div">
                        <span className="parcours_icons"><FontAwesomeIcon icon={faFutbol} title="football icon" /></span>
                        <span className="parcours_date_bloc2">2020 - 2022</span>
                        <div className="parcours_description_bloc2">
                            <div className="parcours_fleche_left"></div>
                            <h2>Assistante boutique</h2>
                            <h3>Angers SCO | Beaucouzé</h3>
                            <div className="parcours_div_skills">
                                <p>Compétences développées:</p>
                                <ul>
                                    <li><strong>Pilotage quotidien de la boutique</strong></li>
                                    <li><strong>Gestion du site e-commerce, revendeurs, fournisseurs, planning équipe, stocks</strong></li>
                                    <li><strong>Mise en place d'opérations visant à promouvoir et diffuser l'image de marque</strong></li>
                                    <li><strong>Management de la force de vente</strong></li>
                                    <li><strong>Analyse concurrentielle</strong> <br /> (Benchmarker)</li>
                                    <li><strong>Accompagnement et encadrement des stagiaires</strong></li>
                                    <li><strong>Comptabilité</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="parcours_div">
                        <span className="parcours_icons"><FontAwesomeIcon icon={faMugSaucer} title="mug icon" /></span>
                        <span className="parcours_date"> 2019 - 2020</span>
                        <div className="parcours_description">
                            <div className="parcours_fleche_right"></div>
                            <h2>Cogérante PME</h2>
                            <h3>Bar | Angers</h3>
                            <div className="parcours_div_skills">
                                <p>Compétences développées:</p>
                                <ul>
                                    <li><strong>Gestion des commandes, stocks</strong> <br /></li>
                                    <li><strong>Management de la force de vente</strong></li>
                                    <li><strong>Comptabilité</strong></li>
                                    <li><strong>Administratif</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="parcours_div">
                        <span className="parcours_icons"><FontAwesomeIcon icon={faGraduationCap} title="diplome icon" /></span>
                        <span className="parcours_date_bloc2">2017 - 2019</span>
                        <div className="parcours_description_bloc2">
                            <div className="parcours_fleche_left"></div>
                            <h2>BTS Gestion de la PME</h2>
                            <h3>CCI Pierre-Cointreau | Angers</h3>
                        </div>
                    </div>
                    <div className="parcours_div">
                        <span className="parcours_icons"><FontAwesomeIcon icon={faFolderOpen} title="folder icon" /></span>
                        <span className="parcours_date"> 2017 - 2019</span>
                        <div className="parcours_description">
                            <div className="parcours_fleche_right"></div>
                            <h2>Assistante de Gestion</h2>
                            <h3>Aquascop Biologie | Beaucouzé</h3>
                            <div className="parcours_div_skills">
                                <p>2 ans - Alternance</p>
                                <p>Compétences développées:</p>
                                <ul>
                                    <li><strong>Administration des marchés publics</strong></li>
                                    <li><strong>Mise en place et gestion du réseau social LinkdIn</strong></li>
                                    <li><strong>Gestion des déplacements des équipes</strong></li>
                                    <li><strong>Organisation et gestion de la base de données</strong></li>
                                    <li><strong>Aide ponctuelle sur les rapports d'études</strong> relecture et mise en page</li>
                                    <li><strong>Suivi et facturation des études avec traitement des bons de commande</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="parcours_div">
                        <span className="parcours_icons"><FontAwesomeIcon icon={faGraduationCap} title="diplome icon" /></span>
                        <span className="parcours_date_bloc2">2015 - 2017</span>
                        <div className="parcours_description_bloc2">
                            <div className="parcours_fleche_left"></div>
                            <h2>BTS Communication</h2>
                            <h3>CNED | Lyon</h3>
                        </div>
                    </div>
                    <div className="parcours_div">
                        <span className="parcours_icons"><FontAwesomeIcon icon={faMessage} title="Message icon" /></span>
                        <span className="parcours_date"> 2016</span>
                        <div className="parcours_description">
                            <div className="parcours_fleche_right"></div>
                            <h2>Community Manager</h2>
                            <h3>Nantes Solution | Stamford, Etat-Unis</h3>
                            <div className="parcours_div_skills">
                                <p>3 mois - Stage</p>
                                <p>Compétences développées:</p>
                                <ul>
                                    <li><strong>Création d'un site web</strong><br /> (Wordpress) </li>
                                    <li><strong>Gestion des réseaux sociaux</strong></li>
                                    <li><strong>Communication sur les évenements à venir</strong></li>
                                    <li><strong>Participation aux salons</strong></li>
                                    <li><strong>Analyse SWOT</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id="Projets">
                <h1>Projets</h1>
                <ul className='Projet_ul'>
                    {cards.map((elem, index) => {
                        return (
                            <li key={elem.id}>
                                <LinkProjets imageURL={cards[index].pictures} title={cards[index].title} id={elem.id} description={cards[index].description} icons={cards[index].icons} buttonText={cards[index].buttonText} /></li>
                        )
                    })}
                </ul>
            </section>
            <section id="Contact">
                <h1>Me contacter</h1>
                <div className="contact_container-composant">
                    <FormContact></FormContact>
                </div>
            </section>
        </>
    )
}
export default Home;

