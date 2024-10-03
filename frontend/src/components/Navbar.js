import React from 'react';
import {Link, useMatch, useResolvedPath} from 'react-router-dom';

export default function Navbar() {

    return (
    <nav className="nav">
        <h1 className="site-title">Chop Society</h1>
        <ul>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/store">Store</CustomLink>
            <CustomLink to="/about">About</CustomLink>
        </ul>
    </nav>
    );

}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <Link
            to={to}
            className={`nav-item nav-link ${isActive ? "active" : ""}`}
            {...props}
        >
            {children}
        </Link>
    );
}