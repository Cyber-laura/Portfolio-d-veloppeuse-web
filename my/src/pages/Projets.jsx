import cards from '../data'
import React from 'react'
import { useParams, Link } from "react-router-dom"

import '../assets/styles/_Projets.scss'

function FicheProjets() {
    const id = useParams();
    const cardId = cards.find(cardsFiche => cardsFiche.id === id.id);

    return (
        <>
            <section className="fiche_projets_container_img">
                <div className="fiche_projets_img">
                    <img src={cardId.pictures} alt="Projets" />
                </div>
            </section>
            <section className="fiche_projets_container_text">
                <div className="fiche_projets_titre">
                    <h1>{cardId.title}</h1>
                    <h2>{cardId.description}</h2>
                </div>
                <div className="fiche_projets_mission">
                    <h3>Ma mission</h3>
                    <p>{cardId.mission}</p>
                    <h3>Les technologies utilisées</h3>
                    <div>
                        <ul className="fiche_projets_technologies">
                            {cardId.technologies.map((element, index) => {
                                return (<li key={index}>{element}</li>)
                            })
                            }
                        </ul>
                    </div>
                    <h3>Le projet</h3>
                    <p>{cardId.projet}</p>
                    <h4>{cardId.h4}</h4>
                    <ul>
                        {cardId.recommandations.map((element, index) => {
                            return (<li key={index}>{element}</li>)
                        })
                        }
                    </ul>
                    <h4>{cardId.titeresultat}</h4>
                    <ul>
                        {cardId.listresultat.map((element, index) => {
                            return (<li key={index}>{element}</li>)
                        })
                        }
                    </ul>
                    <h3>Consulter le projet</h3>
                    <p>{cardId.Consulter}</p>
                    <ul className="fiche_projets_button_retour">
                        {cardId.lienprojet.map((element, index) => {
                            return (
                                <li key={index}>
                                    <Link to={element}>{cardId.descriptionlienprojet[index]}</Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="fiche_projets_button">
                        <Link to={'/#Projets'}>
                            <button><span>Retour aux projets</span></button>
                        </Link>
                    </div>

                </div>

            </section>
        </>
    )
}
export default FicheProjets;