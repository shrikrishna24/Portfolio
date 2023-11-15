import React from 'react'
import './home.css';
import { Element } from 'react-scroll';
import { useTypewriter } from 'react-simple-typewriter'
import Button from '../../components/button/button'
import { Link } from 'react-scroll';


export default function Home() {
    const [typeEffect] = useTypewriter({
        words: ['Krishna.', 'Web Developer.', 'Frontend Developer.', 'React Developer.', 'Figma Designer.'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    })
    return (
        <Element name="home" className="home-container">
            <section className='home-content'>

                <div className='home-tagline'>

                    <div><p className='tagline-heading'>welcome to my portfolio !</p></div>

                    <div>
                        <h1>Hey folks, I'm <span style={{ color: '#ffc801' }}>{typeEffect}</span></h1>
                    </div>

                    <div>
                        <p className='tagline-descrp'>Crafting success in every line of code, turning challenges into victories on the digital canvas.</p>
                    </div>

                    <div className='home-btn'>
                        <Button btype='primary' bTitle={' Download Resume'} />

                        <Link to={'contact'} smooth={true} >
                            <Button btype='btn-secondary' bTitle={' Get free quote'} />
                        </Link>
                    </div>

                </div>

                <div className='home-img'>
                    <img src={require('../../assests/home/home.jpg')} width={''} height={''} alt="" />
                </div>

            </section>
        </Element>
    )
}
