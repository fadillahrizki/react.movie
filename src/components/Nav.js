import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return(
        <nav className="navbar navbar-dark navbar-expand bg-dark">
            <div className="container">
                <Link to="/react.movie/" className="navbar-brand">
                    App
                </Link>
                <ul className="ml-auto navbar-nav">
                    <Link to="/react.movie/movie" className="nav-item nav-link">
                        <li>Movies</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Nav