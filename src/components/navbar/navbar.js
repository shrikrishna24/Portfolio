import React, { useState } from 'react'
import './navbar.css';
import { Link } from 'react-scroll';
import Hamburger from '../hamburger/hamburger'

export default function Navbar() {
    const [isBurgerClicked, setIsBurgerClicked] = useState(false);

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

    const hideNavbar = () => {
        setIsBurgerClicked(false);
    }

    const showNavbar = () => {
        setIsBurgerClicked(true);
    }

    return (
        <nav>
            <div className='nav-content'>
                <div className='navbar-logo'>
                    <img src={require('../../assests/navbar/logo.svg')} height={'80px'} width={'75px'} alt="" />
                </div>
                <div>
                    <ul className={isBurgerClicked ? "nav_menu_close " : "nav_menu_open"}>
                        {menuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link onClick={hideNavbar} to={item.url} smooth={true} duration={500} offset={-70} className='active-link' >
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <Hamburger Click={isBurgerClicked ? hideNavbar : showNavbar} open={isBurgerClicked} />
            </div>

        </nav>
    )
}
