import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// make sure you create this file

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="custom-navbar">
            <div className="navbar-inner">
                {/* Left: Logo */}
                <div className="navbar-logo">
                    <span>John maina</span>
                </div>

                {/* Center: Links */}
                <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
                {/* Mobile hamburger */}
                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>
            </div>
        </header>
    );
}

export default Navbar;