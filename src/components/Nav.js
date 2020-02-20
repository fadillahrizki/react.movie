import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return(
        <nav className="navbar navbar-dark navbar-expand bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    App
                </Link>
                <ul className="ml-auto navbar-nav">
                    <Link to="/movie" className="nav-item nav-link">
                        <li>Movies</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Nav