import React from 'react'
import './navbar.css';
import { Link } from 'react-scroll';

export default function Navbar() {

    const menuItems = [
        {
            title: "Home",
            url: "home",
        },
        {
            title: "About",
            url: "about",
        },
        {
            title: "Services",
            url: "services",
        },
        {
            title: "Projects",
            url: "projects",
        },
        {
            title: "Contact",
            url: "contact",
        },
    ];

    return (
        <nav>
            <div className='nav-content'>
                <div className='navbar-logo'>
                    <img src={require('../../assests/navbar/logo.png')} height={'80px'} width={'75px'} alt="" />
                </div>
                <div>
                    <ul>
                        {menuItems.map((item) => {
                            return (
                                <li>
                                    <Link to={item.url} smooth={true} duration={500} offset={-70} className='active-link'>
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
