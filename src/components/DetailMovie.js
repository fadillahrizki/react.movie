import React,{useState,useEffect,useContext} from 'react'
import {SINGLE} from '../api/Movie'
import Movie from './Movie'
import Cast from './Cast'
import Crew from './Crew'
import {MovieContext} from './MovieContext'

const DetailMovie = ({match}) =>{
    const IMAGE_URL = 'https://image.tmdb.org/t/p/original'  
    const [datas,setDatas,isLoading,setLoading] = useContext(MovieContext)
    const [movie,setMovie] = useState({
        genres:[],
        production_companies:[],
        production_countries:[],
        spoken_languages:[]
    })
    const [recommendation,setRecommendation] = useState()
    const [similar,setSimilar] = useState()
    const [credits,setCredits] = useState()

    const getMovie = async () =>{
        setLoading(true)
        setMovie(await SINGLE(match.params.id))
        setLoading(false)
    }

    const getCredits = async () =>{
        setCredits(await SINGLE(match.params.id,'credits'))
    }

    const getRecomendation = async () => {
        setRecommendation(await SINGLE(match.params.id,'recommendations'))
    }

    const getSimilar = async () => {
        setSimilar(await SINGLE(match.params.id,'similar'))
    }

    useEffect(()=>{
        getMovie()
        getCredits()
        getRecomendation()
        getSimilar()
    },[match.params.id])
    
    var owl = window.$('.owl-carousel')
    window.$(document).ready(()=>{
        owl.owlCarousel({
            loop:true,
            responsive : {
                0 : {
                    items : 2,
                },
                480 : {
                    items : 3,
                },
                768 : {
                    items : 4,
                },
                1024:{
                    items:6
                },
            },
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true
        })
    })  
    
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
        <div className="container py-3">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <img src={IMAGE_URL+movie.poster_path} alt={movie.title} className="card-img-top"/>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-body">
                            <span className={`badge ${movie.status === 'Released' ? 'badge-success' : 'badge-info' }`}>{movie.status}</span>
                            
                            <h2>{movie.title} <span className="badge badge-info">{movie.runtime} minutes</span></h2>
                            
                            <div className="mb-3">
                                <h5>Genres</h5>
                                {
                                (movie.genres.length < 1) ? '-' : (
                                    movie.genres.map(genre => (
                                        <span className="badge badge-primary mr-3" key={genre.id}>{genre.name}</span>
                                    )))
                                }
                            </div>
                            
                            <div className="mb-3">
                                <h5>Production Companies</h5>
                                {
                                    (movie.production_companies.length < 1) ? '-' : (
                                    movie.production_companies.map(production_company => (
                                        <span className="badge badge-info mr-3" key={production_company.id}>{production_company.name}</span>
                                    )))
                                }
                            </div>
                            
                            <div className="mb-3">
                                <h5>Production Countries</h5>
                                {
                                    (movie.production_countries.length < 1) ? '-' : (
                                        movie.production_countries.map(production_country => (
                                            <span className="badge badge-warning mr-3" key={production_country.name}>{production_country.name}</span>
                                        ))
                                    )
                                }
                                
                            </div>

                            <div className="mb-3">
                                <h5>Spoken Languages</h5>
                                {
                                    (movie.spoken_languages.length < 1) ? '-' : (
                                        movie.spoken_languages.map(spoken_language => (
                                            <span className="badge badge-danger mr-3" key={spoken_language.name}>{spoken_language.name}</span>
                                        ))
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row-fluid mt-3">
                <div className="card">
                    <div className="card-body">
                        <h5>Overview</h5>
                        {(movie.overview) ? movie.overview : ''}
                    </div>
                </div>
            </div>
            <div className="row-fluid mt-3">
                <div className="card">
                    <div className="card-body">
                        <h5>Cast</h5>
                        <div className="row owl-carousel">
                            {credits ? credits.cast.map(cast=>(
                                <Cast cast={cast} key={cast.id}/>
                            )):''}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row-fluid mt-3">
                <div className="card">
                    <div className="card-body">
                        <h5>Crew</h5>
                        <div className="row owl-carousel">
                            {credits ? credits.crew.map(crew=>(
                                <Crew crew={crew} key={crew.id}/>
                            )):''}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row-fluid mt-3">
                <div className="card">
                    <div className="card-body">
                        <h5>Recommendations</h5>
                        <div className="row owl-carousel">
                            {recommendation ? (
                                recommendation.results.map(result => (
                                    <Movie movie={result} key={result.id} carousel={true}/>
                                ))
                            ) : ''}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row-fluid mt-3">
                <div className="card">
                    <div className="card-body">
                        <h5>Similar Movies</h5>
                        <div className="row owl-carousel">
                            {similar ? (
                                similar.results.map(result => (
                                    <Movie movie={result} key={result.id} carousel={true}/>
                                ))
                            ) : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DetailMovie