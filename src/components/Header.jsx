// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/_header-footer.sass';

function Header() {
    return (
        <header className="site-header">
            <div className="header-left">
                <span className="header-logo-text">Praxe 2025 Cortex</span>
            </div>
            <nav className="header-nav">
                <Link to="/" className="nav-link">Přihlášení</Link>
                <Link to="/HomePage" className="nav-link">To do List</Link>
                <Link to="/api-posts" className="nav-link">API Posts</Link>
            </nav>
        </header>
    );
}

export default Header;