import React,{useState,useEffect} from 'react'
import {SINGLE} from '../api/Movie'

const DetailMovie = ({match}) =>{
    const IMAGE_URL = 'https://image.tmdb.org/t/p/original'  
    const [movie,setMovie] = useState({
        genres:[],
        production_companies:[],
        production_countries:[],
        spoken_languages:[]
    })
    const [isLoading,setLoading] = useState(true)

    const getMovie = async () =>{
        setMovie(await SINGLE(match.params.id))
        setLoading(false)
    }

    useEffect(()=>{
        getMovie()
    },[])

    const banner = {
        backgroundImage:'url('+IMAGE_URL+movie.backdrop_path+')',
        width:'100%',
        height:'500px',
        backgroundSize:'cover'
    }

    const releaseDate = new Date(movie.release_date)

    if(isLoading){
        return(
            <div className="container">
                <div className="row mt-3">
                    <div className="col-lg-12 text-center">
                        <div className="spinner-border text-info" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 text-center bg-info">
                    <h5>{releaseDate.toString()}</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12" style={banner}></div>
            </div>
        </div>
        <div className="container detail">
            <div className="row mt-3">
                <div className="col-lg-3">
                    <div className="card">
                        <img src={IMAGE_URL+movie.poster_path} alt={movie.title} className="card-img-top"/>
                    </div>
                </div>
                <div className="col-lg-9 mt-auto">
                    <div className="card">
                        <div className="card-body">
                            <span className={`badge ${movie.status === 'Released' ? 'badge-success' : 'badge-info' }`}>{movie.status}</span>
                            
                            <h2>{movie.title} <span className="badge badge-info">{movie.runtime} minutes</span></h2>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 my-5">
                    <h3>Genres</h3>
                    {
                    (movie.genres.length === 0) ? '-' : (
                        movie.genres.map(genre => (
                            <span className="badge badge-success mr-3" key={genre.id}>{genre.name}</span>
                        )))
                    }
                </div>
                <div className="col-lg-6 my-5">
                    <h3>Production Companies</h3>
                    {
                        (movie.production_companies.length === 0) ? '-' : (
                        movie.production_companies.map(production_company => (
                            <span className="badge badge-info mr-3" key={production_company.id}>{production_company.name}</span>
                        )))
                    }
                </div>
                <div className="col-lg-6 my-5">
                    <h3>Production Countries</h3>
                    {
                        (movie.production_countries.length === 0) ? '-' : (
                            movie.production_countries.map(production_country => (
                                <span className="badge badge-warning mr-3" key={production_country.name}>{production_country.name}</span>
                            ))
                        )
                    }
                </div>
                <div className="col-lg-6 my-5">
                    <h3>Spoken Languages</h3>
                    {
                        (movie.spoken_languages.length === 0) ? '-' : (
                            movie.spoken_languages.map(spoken_language => (
                                <span className="badge badge-danger mr-3" key={spoken_language.name}>{spoken_language.name}</span>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default DetailMovie