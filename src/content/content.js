import React from 'react';
import './content.css'
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Projects from '../pages/projects/project';
import Contact from '../pages/contact/contact';
import Navigation from '../components/navbar/navbar';
import Service from '../pages/service/service';


export default function Routing() {
    return (
        <div className='container'>
            <Navigation />
            <Home />
            <About />
            <Service />
            <Projects />
            <Contact />
        </div>
    );
}
