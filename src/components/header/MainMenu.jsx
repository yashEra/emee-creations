import React from 'react';
import Link from 'next/link';

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li>
                    <Link href="/" className="active">Home</Link>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>About</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/team">Team</Link></li>
                        {/* <li><Link href="/team-details/1">Team Details</Link></li> */}
                        <li><Link href="/pricing">Pricing</Link></li>
                        {/* <li><Link href="/faq">FAQ</Link></li> */}
                        {/* <li><Link href="/contact-us">Contact Us</Link></li> */}
                        {/* <li><Link href="/not-found">Error Page</Link></li> */}
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="project" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Projects</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/project">Project style one</Link></li>
                        {/* <li><Link href="/project-details/1">Project Details</Link></li> */}
                    </ul>
                </li>
                <li>
                    <Link href="/services-2" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Services</Link>
                    {/* <ul className="dropdown-menu">
                        <li><Link href="/services">Services Version One</Link></li>
                        <li><Link href="/services-2">Services Version Two</Link></li>
                        <li><Link href="/services-details/1">Services Details</Link></li>
                    </ul> */}
                </li>
                <li><Link href="/contact-us">contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;