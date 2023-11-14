import React from 'react';
import './about.css';
import { Element } from 'react-scroll';
import Skill from '../../components/skills/skill';


export default function About() {

    return (
        <Element name="about" className="about-conatainer">
            <section className='about-content'>
                <div className='about-img'>
                    <div className='about-img-border'></div>
                    <div className='mine-img'></div>
                </div>
                <div className='about-text'>
                    <div className='about-decrp'>
                        <h1 className='about-heading'>About <span className='about-spans'>me.</span></h1>
                        <p>Graduated Information Technology passionate about  to kickstart my career as a Front-End Developer. With meticulous attention to detail, adept problem-solving, and a collaborative team player. Eager to showcase expertise as a skillful service provider meeting industry demands.
                        </p>
                    </div>
                    <div className='about-skills'>
                        <h1 className='about-heading'>My <span className='about-spans'>skills.</span></h1>
                        <Skill />
                    </div>
                </div>
            </section>
        </Element>
    )
}
