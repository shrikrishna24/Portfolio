import React from 'react'
import './service.css';
import { Element } from 'react-scroll'
import { typeOfServices } from './servicedata';


export default function Service() {

 
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
