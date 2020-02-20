import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return(
        <div className="d-flex align-items-center justify-content-center" style={{height:'50vh'}}>
            <div className="text-center">
                <h2>Welcome to Simple React App Movie</h2>
                <Link to='/react.movie/movie'>
                    <p className="btn btn-outline-info">Go to movies</p>
                </Link>
            </div>
        </div>
    )
}

export default Home