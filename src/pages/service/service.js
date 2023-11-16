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

    const getCardsPerPage = () => {
        if (window.innerWidth <= 800) {
            return 1; // 1 card per row for mobile
        } else if (window.innerWidth <= 1624) {
            return 3; // 3 cards per row for screens less than 1624px wide
        } else {
            return 4; // 4 cards per row for larger screens
        }
    };

    const slideRight = () => {
        const cardsPerPage = getCardsPerPage();
        setCurrent((current + cardsPerPage) % typeOfServices.length);
    };

    const slideLeft = () => {
        const cardsPerPage = getCardsPerPage();
        setCurrent((current - cardsPerPage + typeOfServices.length) % typeOfServices.length);
    };

    return (
        <Element name="services" className="service-container">
            <div className="service-bg"></div>
            <section className="service-content">
                <div className='service-header'>
                    <h1>Services</h1>
                </div>
                <div
                    className='service-card-container'
                    onMouseEnter={() => setAutoplay(false)}
                    onMouseLeave={() => setAutoplay(true)}
                >
                    {typeOfServices.slice(current, current + getCardsPerPage()).map((item, index) => {
                        return (
                            <div key={index} className="service-cards" >
                                <div>
                                    <p className="service-title">{item.serviceType}</p>
                                </div>
                                <div className='service-descrip'>
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
                        <p className='arrow-text'>
                            &lsaquo;
                        </p>
                    </div>

                    <div className="carousel_arrow_right" onClick={slideRight}>
                        <p className='arrow-text'>
                            &rsaquo;
                        </p>
                    </div>
                </div>
            </section>
        </Element>
    );
}
