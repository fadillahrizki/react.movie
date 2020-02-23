import React from 'react'
import {Link} from 'react-router-dom'

const IMAGE_URL = 'https://image.tmdb.org/t/p/original' 

const Movie = ({movie,carousel}) =>{
    const card = {
        backgroundImage:`url(${IMAGE_URL+movie.poster_path})`,
        height:'250px',
        backgroundSize:'cover',
        border:'1px solid #ddd',
        fontSize:'14px',
    }

    const header = {
        background:'linear-gradient(to bottom, #000,#0000)',
        border:'none',
      }
      
    const footer = {
        background:'linear-gradient(to top, #000,#0000)',
        border:'none',
    }

    const release_date = movie.release_date.split("-")

    return (
        <div className={`${carousel ? 'col-12' : 'col-lg-2 col-md-3 col-sm-4 col-6 mt-3'}`}>
            <Link to={`/movie/${movie.id}`} style={{textDecoration:'none'}}>
                <div className="card d-flex justify-content-between text-light card-movie" style={card}>
                    <div className="card-header" style={header}>
                        <span className="text-warning" > <i className="fa fa-star"></i> {movie.vote_average}</span>
                    </div>
                    <div className="card-footer text-center" style={footer}>
                        <p><b>{movie.title}</b> ({release_date[0]})</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Movie