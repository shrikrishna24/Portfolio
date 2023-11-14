import React from 'react'
import './project.css'
import { Element } from 'react-scroll'

export default function Project() {

    const projectList = [
        {
            title: 'Viyat',
            description: 'IoT powered automatic weather station designed to provide you with accurate real- time information about local weather conditions',
        },
        {
            title: 'MicroCast',
            description: 'IoT powered automatic weather station designed to provide you with accurate real- time information about local weather conditions',
        },
    ];


    return (
        <Element name="projects" className="project-container">
            <div className='project-bg'></div>
            <section className='project-content'>
                {projectList.map((item) => {
                    return (
                        <div className='project-carousel'>
                            <div className='carousel-title'><p>{item.title}</p></div>
                            <div className='carousel-descrp'><p>{item.description}</p></div>
                        </div>
                    )
                })}

            </section>
        </Element>
    )
}
