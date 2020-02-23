import React,{useContext,useState} from 'react'
import {MovieContext} from './MovieContext'
import {NEXT_PAGE,PREV_PAGE,GET} from '../api/Movie'
import Movie from './Movie'

const MovieList = () =>{
    const [datas,setDatas,isLoading,setLoading,search,setSearch,curr,setCurr] = useContext(MovieContext)
    
    const PrevPage = async () => {
        setLoading(true)
        if(search !== ''){
            setDatas(await PREV_PAGE(datas.page,curr,search))
        }else{
            setDatas(await PREV_PAGE(datas.page,curr))
        } 
        setLoading(false)
    }

    const NextPage = async () => {
        setLoading(true)
        if(search !== ''){
            setDatas(await NEXT_PAGE(datas.page,curr,search))
        }else{
            setDatas(await NEXT_PAGE(datas.page,curr))
        }
        setLoading(false)
    }

    const Popular = async () => {
        setCurr('popular')
        setLoading(true)
        setDatas(await GET('popular'))
        setLoading(false)
    }

    const NowPlaying = async () => {
        setCurr('now_playing')
        setLoading(true)
        setDatas(await GET('now_playing'))
        setLoading(false)
    }

    const Upcoming = async () => {
        setCurr('upcoming')
        setLoading(true)
        setDatas(await GET('upcoming'))
        setLoading(false)
    }

    const Discover = async () => {
        setCurr('discover')
        setLoading(true)
        setDatas(await GET('discover'))
        setLoading(false)
    }

    return (
        <div className="container">
            <div className="row p-3">
                <button className={`btn ${(curr === 'discover') ? 'btn-secondary' : 'btn-outline-secondary'} mr-3 mt-3 mt-md-0`} onClick={Discover}>Discover</button>
                <button className={`btn ${(curr === 'popular') ? 'btn-secondary' : 'btn-outline-secondary'} mr-3 mt-3 mt-md-0`} onClick={Popular}>Popular</button>
                <button className={`btn ${(curr === 'now_playing') ? 'btn-secondary' : 'btn-outline-secondary'} mr-3 mt-3 mt-md-0`} onClick={NowPlaying}>Now Playing</button>
                <button className={`btn ${(curr === 'upcoming') ? 'btn-secondary' : 'btn-outline-secondary'} mr-3 mt-3 mt-md-0`} onClick={Upcoming}>Upcoming</button>

                {(curr === 'search') ? (
                    <button className="btn btn-secondary mr-3 mt-3 mt-md-0">Total Results : {datas.total_results}</button>
                ):''}

                <div className="btn-group ml-auto col-12 col-md-2 mt-3 mt-md-0">
                    {(datas && datas.page > 1) ? (
                        <button className="btn btn-outline-secondary" onClick={PrevPage}>&laquo;</button>
                    ) : ''}
                    <button className="btn btn-secondary" disabled>{(datas) ? `${datas.page} of ${datas.total_pages}` : '1'}</button>
                    {
                    (datas && datas.page < datas.total_pages) ? (
                        <button className="btn btn-outline-secondary" onClick={NextPage}>&raquo;</button>
                    ): ''   
                    }
                </div>

            </div>
            <div className="row pb-3">
                {
                (isLoading) ? (
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col-lg-12 text-center">
                                <div className="spinner-border text-info" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )    :
                
                (datas.total_results > 0) ?(
                    datas.results.map(movie => (
                        <Movie  movie={movie} key={movie.id} />
                    ))
                ): (
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col-lg-12 text-center">
                                <h2>Data not found</h2>
                            </div>
                        </div>
                    </div>
                )
                
                }

                <div className="row">

                </div>
            </div>
        </div>
    )
}

export default MovieList