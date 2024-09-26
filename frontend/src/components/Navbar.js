import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {

    return <nav className="nav">
        <h1 className="site-title">Chop Society</h1>
        <ul>
            <Link to="/" className="nav-item nav-link active">Home</Link>
            <Link to="/store" className="nav-item nav-link">Store</Link>
            <Link to="/about" className="nav-item nav-link">About</Link>
        </ul>
    </nav>


}

export default Navbar;