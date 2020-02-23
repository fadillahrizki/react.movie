import React,{useState,useEffect,useContext} from 'react'
import {Link} from 'react-router-dom'
import Movie from './Movie'
import {GET} from '../api/Movie'
import {MovieContext} from './MovieContext'

const Home = () => {
    const [datas,setDatas,isLoading,setLoading,search,setSearch,curr,setCurr] = useContext(MovieContext)
    const [popular,setPopular] = useState({})
    const [nowPlaying,setNowPlaying] = useState({})
    const [upComing,setUpComing] = useState({})
    
    const getPopular = async () => {
        setPopular(await GET('popular'))
    }

    const getUpComing = async () => {
        setUpComing(await GET('upcoming'))
    } 

    const getNowPlaying = async () => {
        setNowPlaying(await GET('now_playing'))
    } 

    const more = () => {
        window.scrollTo(0,620)
    }

    useEffect(()=>{
        getPopular()
        getUpComing()
        getNowPlaying()
    },[])

    const seePopular = async () => {
        setLoading(true)
        setCurr('popular')
        setDatas(await GET(curr))
        setLoading(false)
    }
    const seeNowPlaying = async () => {
        setLoading(true)
        setCurr('now_playing')
        setDatas(await GET(curr))
        setLoading(false)
    }
    const seeUpcoming = async () => {
        setLoading(true)
        setCurr('upcoming')
        setDatas(await GET(curr))
        setLoading(false)
    }

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
                }
            },
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true
        })

    })  

    return(
        <>
            <div className="bg-secondary py-5 text-light text-center d-flex align-items-center" style={{height:'92vh'}}>
                <div className="container">
                    <div className="row-fluid">
                        <h2 className="display-4">Hello Everyone.</h2>
                        <button onClick={more} className="btn btn-outline-light">See More</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row-fluid d-flex justify-content-between my-3">
                    <h4 className="text-secondary">Popular</h4>
                    <Link to='/react.movie/movie' className="btn btn-outline-secondary" onClick={seePopular}>See More</Link>
                </div>
                <div className="row owl-carousel">
                    {
                    (popular.total_results > 0) ?
                        popular.results.map((movie,index) => {
                            return <Movie movie={movie} key={movie.id} carousel={true}/>   
                        })
                    :
                        ''
                    }
                </div>
                <div className="row-fluid d-flex justify-content-between my-3">
                    <h4 className="text-secondary">Now Playing</h4>
                    <Link to='/react.movie/movie' className="btn btn-outline-secondary" onClick={seeNowPlaying}>See More</Link>
                </div>
                <div className="row owl-carousel">
                    {
                    (nowPlaying.total_results > 0) ?
                        nowPlaying.results.map((movie,index) => {
                            return <Movie movie={movie} key={movie.id} carousel={true}/>   
                        })
                    :
                        ''
                    }
                </div>
                <div className="row-fluid d-flex justify-content-between my-3">
                    <h4 className="text-secondary">Upcoming</h4>
                    <Link to='/react.movie/movie' className="btn btn-outline-secondary" onClick={seeUpcoming}>See More</Link>
                </div>
                <div className="row owl-carousel">
                    {
                    (upComing.total_results > 0) ?
                        upComing.results.map((movie,index) => {
                            return <Movie movie={movie} key={movie.id} carousel={true}/>   
                        })
                    :
                        ''
                    }
                </div>
            </div>
        </>
    )
}

export default Home