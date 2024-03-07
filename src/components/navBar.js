import React from 'react';
import './navBar.css';

function Navbar() {
    const autoScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <nav className = "navbar">
            <div className="navbar-logo">TAO ZHIWEI</div>
            <ul className="navbar-links">
                <li><a href='/' onClick={() => window.location.reload()}>Home</a></li>
                <li><a href='#background' onClick={() => autoScroll("background")}>Background</a></li>
                <li><a href='#project' onClick={() => autoScroll("project")}>Projects</a></li>
                <li><a href="#contact" onClick={() => autoScroll("contact")}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;