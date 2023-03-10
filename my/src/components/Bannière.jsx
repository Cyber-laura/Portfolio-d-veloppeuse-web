import React, { useState, useEffect } from 'react';
import image from '../assets/backgroundTest.png'

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
                    <p>Je suis Laura, développeuse web et mobile.</p>
                    <p>Consultez mon parcours ainsi que les projets que j'ai réalisés.</p>
                    <div className="bg_bannière_button">
                        <a href='"'>
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