import { Link } from 'react-router-dom'
import '../assets/styles/_LinkProjets.scss'

function displayIcons(icons) {
    return icons.map((icon, index) => (
        <span key={index} dangerouslySetInnerHTML={{ __html: icon }}></span>
    ));
}
function handleLinkClick() {
    window.scrollTo(0, 0);
}

function Card(cards) {
    return (
        <Link to={`/card/${cards.id}`} onClick={handleLinkClick}>
            <div className="projets-container">
                <div className="projets-img">
                    <img src={cards.imageURL} alt={cards.title} />
                </div>
                <div className="projets-div-text">
                    <h2>{cards.title}</h2>
                    <p>{cards.description}</p>
                    <div className="projets-div-icons">
                        {displayIcons(cards.icons)}
                    </div>
                    <div className="projets_div_button">
                        <button>
                            <span>{cards.buttonText}</span>
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default Card;