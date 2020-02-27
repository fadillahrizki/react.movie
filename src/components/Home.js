import React,{useState,useEffect,useContext} from 'react'
import {Link} from 'react-router-dom'
import Movie from './Movie'
import {GET} from '../api/Movie'
import {MovieContext} from './MovieContext'
import MovieBanner from './MovieBanner'


const Home = () => {
    const [datas,setDatas,isLoading,setLoading,search,setSearch,curr,setCurr] = useContext(MovieContext)
    const [popular,setPopular] = useState()
    const [nowPlaying,setNowPlaying] = useState()
    
    const getPopular = async () => {
        setLoading(true)
        setPopular(await GET('popular'))
        setLoading(false)
    }

    const getNowPlaying = async () => {
        setLoading(true)
        setNowPlaying(await GET('now_playing'))
        setLoading(false)
    } 
    
    const seePopular = async () => {
        setLoading(true)
        setCurr('popular')
        setDatas(await GET('popular'))
        setLoading(false)
    }
    const seeNowPlaying = async () => {
        setLoading(true)
        setCurr('now_playing')
        setDatas(await GET('now_playing'))
        setLoading(false)
    }
    
    useEffect(()=>{
        getPopular()
        getNowPlaying()
    },[])
    
    var owl = window.$('.owl-carousel')
    var bowl = window.$('.banner-carousel')

    const prevItem = () =>{
        bowl.trigger('prev.owl.carousel')
    }
    
    const nextItem = () => {
        bowl.trigger('next.owl.carousel')
    }

    
    window.$(()=>{
        
        bowl.owlCarousel({
            loop:true,
            items:1,
            autoplay:true,
            autoplayTimeout:5000,
        }) 

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
                }
            },
        })
    })  

    return(
        <> 
            <div className="w-100">
                <div className="banner-carousel owl-carousel">
                    {nowPlaying ? (
                        nowPlaying.results.map(movie=>(
                            <MovieBanner key={movie.id} movie={movie}/>
                        ))
                    ) : ''}
                </div>
                <div className="btn-group navigator">
                    <button className="btn btn-dark" onClick={prevItem}><i className="fa fa-angle-left"></i></button>
                    <button className="btn btn-dark" onClick={nextItem}><i className="fa fa-angle-right"></i></button>
                </div>
            </div>
            <div className="container">
                <div className="row-fluid d-flex justify-content-between my-3">
                    <h4 className="text-secondary">Popular</h4>
                    <Link to='/movie' className="btn btn-outline-secondary" onClick={seePopular}>See More</Link>
                </div>
                <div className="row owl-carousel">
                    {
                    (popular) ?
                        popular.results.map(movie => (
                            <Movie movie={movie} key={movie.id} carousel={true}/>   
                        ))
                    :
                        ''
                    }
                </div>
                <div className="row-fluid d-flex justify-content-between my-3">
                    <h4 className="text-secondary">Now Playing</h4>
                    <Link to='/movie' className="btn btn-outline-secondary" onClick={seeNowPlaying}>See More</Link>
                </div>
                <div className="row owl-carousel">
                    {
                    (nowPlaying) ?
                        nowPlaying.results.map(movie => (
                            <Movie movie={movie} key={movie.id} carousel={true}/>   
                        ))
                    :
                        ''
                    }
                </div>
            </div>
        </>
    )
}

export default Home