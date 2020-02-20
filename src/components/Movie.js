import React from 'react'
import {Link} from 'react-router-dom'

const IMAGE_URL = 'https://image.tmdb.org/t/p/original' 

const Movie = ({movie}) =>{
    return (
        <Link to={`/movie/${movie.id}`} className="col-lg-3 mt-3">
            <div className="card">
                {(movie.poster_path === null) ? '' : (
                    <img src={IMAGE_URL+movie.poster_path} className="card-img-top" alt={movie.title}/>
                )}
                <div className="card-body">
                    <h5>{movie.title}</h5>
                </div>
            </div>
        </Link>
    )
}

export default Movie