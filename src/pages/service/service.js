import React from 'react'
import './service.css';
import { Element } from 'react-scroll'

export default function Service() {

    const typeOfServices = [
        {
            serviceType: 'Responsive Web Design',
            seriveDetails: 'Ensuring seamless functionality across screen dimensions',
        },
        {
            serviceType: 'User Interface (UI)',
            seriveDetails: 'Crafting visually captivating and engaging user interfaces',
        },
        {
            serviceType: 'Web Development',
            seriveDetails: 'Crafting clean and versatile code utilizing frameworks like React',
        },
        {
            serviceType: 'Browser Compatibility',
            seriveDetails: 'Ensuring flawless functionality across various web browsers',
        },
        {
            serviceType: 'Performance Optimization',
            seriveDetails: 'Fine-tuning code and assets to enhance website loading speeds',
        },
        {
            serviceType: 'Accessibility',
            seriveDetails: 'we Follow best practices for web accessibility guidelines',
        },
        {
            serviceType: 'Version Control/Git',
            seriveDetails: 'Collaborating on code through version control systems like Git',
        },
        {
            serviceType: 'Web Design Prototyping',
            seriveDetails: 'Creating interactive prototypes in Figma to showcase user functionality',
        },

    ]

    const firstFourService = typeOfServices.slice(0, 4);
    const lastFourService = typeOfServices.slice(-4);

    return (
        <Element name="services" className="service-container">
            <div className='service-bg'></div>
            <section className='service-content'>
                <div>
                    {firstFourService.map((item, index) => {
                        return (
                            <div key={index} className='service-cards'>
                                <div><p className='service-title'>{item.serviceType}</p></div>
                                <div><p>{item.seriveDetails}</p></div>
                                <div className='service-card-border'></div>
                            </div>
                        )
                    })}
                </div>
                <div>
                    {lastFourService.map((item, index) => {
                        return (
                            <div key={index} className='service-cards'>
                                <div><p className='service-title'>{item.serviceType}</p></div>
                                <div><p>{item.seriveDetails}</p></div>
                                <div className='service-card-border'></div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </Element>
    )
}
