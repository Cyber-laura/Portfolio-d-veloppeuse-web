import React, { useState, useEffect } from 'react';
import image from '../assets/backgroundTest2.jpg'

import '../assets/styles/_Bannière.scss'

function Bannière() {
    const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });

    const handleScroll = () => {
        const y = window.pageYOffset / window.innerHeight;
        setBackgroundPosition({ x: 0, y: y * 100 });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="bg-bannière">
            <div
                className="background"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y}%`,
                    height: `1000px`,
                }}
            >
                <div className="bg-bannière-text">
                    <h1>Bienvenue</h1>
                    <p>Je suis Laura, <strong>développeuse web et mobile</strong>.</p>
                    <p>Consultez <a href='#Parcours'>mon parcours</a> ainsi que <a href='#Projets'> les projets</a> que j'ai réalisés.</p>
                    <div className="bg_bannière_button">
                        <a href='#Contact'>
                            <button>
                                <span>Contactez-moi !</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Bannière