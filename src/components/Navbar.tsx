// import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/sass/Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">WELSTORY</div>
            <ul className="nav-links">
                <li>
                    <Link to={"/"}>Solution & Service</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;