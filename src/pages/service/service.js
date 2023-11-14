import React, { useState, useEffect } from 'react';
import './service.css';
import { Element } from 'react-scroll';
import { typeOfServices } from './servicedata';

export default function Service() {
    const [current, setCurrent] = useState(0);
    const [autoplay, setAutoplay] = useState(true);
    let timeOut = null;

    useEffect(() => {
        timeOut = autoplay && setTimeout(slideRight, 2900);
        return () => clearTimeout(timeOut);
    }, [autoplay, current]);

    const slideRight = () => {
        setCurrent((current + 4) % typeOfServices.length);
    };

    const slideLeft = () => {
        setCurrent((current - 4 + typeOfServices.length) % typeOfServices.length);
    };

    return (
        <Element name="services" className="service-container">
            <div className="service-bg"></div>
            <section className="service-content">
                <header className='about-header'>
                    <h1>Services</h1>
                </header>
                <div
                    onMouseEnter={() => setAutoplay(false)}
                    onMouseLeave={() => setAutoplay(true)}
                >
                    {typeOfServices.slice(current, current + 4).map((item, index) => {
                        return (
                            <div key={index} className={`service-cards`} >
                                <div>
                                    <p className="service-title">{item.serviceType}</p>
                                </div>
                                <div>
                                    <p>{item.seriveDetails}</p>
                                </div>
                                <div className="service-card-border"></div>
                            </div>
                        );
                    })}
                </div>

                {/* ARROW */}
                <div>
                    <div className="carousel_arrow_left" onClick={slideLeft}>
                        <p >
                            &lsaquo;
                        </p>
                    </div>

                    <div className="carousel_arrow_right" onClick={slideRight}>
                        <p>
                            &rsaquo;
                        </p>
                    </div>
                </div>
            </section>
        </Element>
    );
}
