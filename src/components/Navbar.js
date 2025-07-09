import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // make sure you create this file

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="custom-navbar">
            <div className="navbar-inner">
                {/* Left: Logo */}
                <div className="navbar-logo">
                    <img src="/logo.svg" alt="Logo" />
                    <span>john maina</span>
                </div>

                {/* Center: Links */}
                <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>

                {/* Right: Actions */}
                <div className="navbar-actions">
                    <button className="btn btn-outline">Sign In</button>
                    <button className="btn btn-solid">Download</button>
                </div>

                {/* Mobile hamburger */}
                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>
            </div>
        </header>
    );
}

export default Navbar;
