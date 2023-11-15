import React, { useState, useEffect } from 'react'
import './project.css'
import { Element } from 'react-scroll'

export default function Project() {

    const [current, setCurrent] = useState(0);
    const [autoplay, setAutoplay] = useState(true);
    let timeOut = null;

    useEffect(() => {
        timeOut = autoplay && setTimeout(slideRight, 2900);
        return () => clearTimeout(timeOut);
    }, [autoplay, current]);

    const projectList = [
        {
            title: 'Viyat',
            description: 'A leading IoT visualization tool with an Admin dashboard for effortless device monitoring. Users get personalized real-time weather data insights',
            link: "https://weathercastsolutions.com/products/viyat"
        },
        {
            title: 'MicroCast',
            description: 'Website with 3-hourly updated predictions 30-hour forecast on dashboard, and high temperature forecast accuracy within 1.5°C',
            link: "https://test.weathercastsolutions.com/",
        },
        {
            title: 'Company Portfolio',
            description: 'Startup company portfolio',
            link: 'https://weathercastsolutions.com/'
        },
    ];


    const getCardsPerPage = () => {
        if (window.innerWidth <= 800) {
            return 1;
        } else if (window.innerWidth <= 1624) {
            return 2;
        } else {
            return 3;
        }
    };

    console.log(getCardsPerPage());

    const slideRight = () => {
        const cardsPerPage = getCardsPerPage();
        setCurrent((current + cardsPerPage) % projectList.length);
    };

    const slideLeft = () => {
        const cardsPerPage = getCardsPerPage();
        setCurrent((current - cardsPerPage + projectList.length) % projectList.length);
    };



    return (
        <Element name="projects" className="project-container">
            <div className='project-bg'></div>
            <section className='project-content'>
                <div className='project-header'>
                    <h1>Projects</h1>
                </div>
                <div
                    className='project-card-container'
                    onMouseEnter={() => setAutoplay(false)}
                    onMouseLeave={() => setAutoplay(true)}
                >
                    {projectList.slice(current, current + getCardsPerPage()).map((item, index) => {
                        return (

                            <div key={index} className='project-carousel'>
                                <div className='pr-carousel-title'>
                                    <a target="_blank" rel="noopener noreferrer" href={item.link} >
                                        {item.title}
                                    </a>
                                </div>
                                <div className='pr-carousel-descrp'><p>{item.description}</p></div>
                            </div>
                        )
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
    )
}
