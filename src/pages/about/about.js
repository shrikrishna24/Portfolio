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
                        <p className='about-paragraph'>
                            I am excited to advance my career as a Developer with almost 2 years of professional experience. I have a strong attention to detail, a problem-solving mindset, and an eagerness to learn and expand my skill set.
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
