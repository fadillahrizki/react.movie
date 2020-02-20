import React,{useContext} from 'react'
import {MovieContext} from './MovieContext'
import {NEXT_PAGE,PREV_PAGE} from '../api/Movie'
import Movie from './Movie'
import Search from './Search'

const MovieList = () =>{
    const [datas,setDatas,isLoading,setLoading,search] = useContext(MovieContext)
    
    const PrevPage = async () => {
        setLoading(true)
        if(search !== ''){
            setDatas(await PREV_PAGE(datas.page,search))
        }else{
            setDatas(await PREV_PAGE(datas.page))
        } 
        setLoading(false)
    }

    const NextPage = async () => {
        setLoading(true)
        if(search !== ''){
            setDatas(await NEXT_PAGE(datas.page,search))
        }else{
            setDatas(await NEXT_PAGE(datas.page))
        }
        setLoading(false)
    }

    return (
        <div className="container">
            <div className="row pt-5">
                <div className="col-lg-12">
                    <Search />
                </div>
            </div>
            <div className="row py-5">
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
                
                (datas.total_results > 0) ?    
                [
                    (
                        <div className="container" key='App'>
                            <div className="row">
                                <div className="col-lg-6">
                                    <h2>Results : {datas.total_results}</h2>
                                    <h2>Total Pages : {datas.total_pages}</h2>
                                </div>
                                <div className="col-lg-6 btn-group">
                                    <button className="btn btn-outline-info" onClick={PrevPage} disabled={`${(datas.page === 1) ? 'disable' : ''}`} >Previous Page</button>
                                    <button className="btn btn-info" disabled>{datas.page}</button>
                                    <button className="btn btn-outline-info" onClick={NextPage} disabled={`${(datas.page === datas.total_pages) ? 'disable' : ''}`}>Next Page</button>
                                </div>
                            </div>
                        </div>
                    ),

                    datas.results.map(movie => (
                        <Movie  movie={movie} key={movie.id} />
                    ))
                ]

                : (
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col-lg-12 text-center">
                                <h2>Data not found</h2>
                            </div>
                        </div>
                    </div>
                )

                }
            </div>
        </div>
    )
}

export default MovieList