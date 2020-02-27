import React,{useEffect,useState,useContext} from 'react'
import {Link,withRouter,useLocation} from 'react-router-dom'
import {GET_GENRES} from '../api/Movie'
import {MovieContext} from './MovieContext'
import {SEARCH} from '../api/Movie'
import Loading from 'react-loading-bar'

const Nav = () => {
    const location = useLocation()
    const [genres,setGenres] = useState()
    const [datas,setDatas,isLoading,setLoading,search,setSearch,curr,setCurr] = useContext(MovieContext)

    const getGenres = async () => {
        setGenres(await GET_GENRES())
    }
    

    useEffect(()=>{
        getGenres()
    },[])

    const updateSearch = (e) => {
        setSearch(e.target.value)   
    }

    const searchMovies =  async (e) => {
        await e.preventDefault()
        setCurr('search')
        setLoading(true)
        setDatas(await SEARCH(search))
        setLoading(false)
    }

    return(
        <>
        <nav className="navbar navbar-dark navbar-expand-md bg-dark sticky-top">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Movieee
                </Link>

                <button className="navbar-toggler" data-toggle="collapse" data-target="#collapse">
                    <i className="navbar-toggler-icon"></i>
                </button>
                <div className="navbar-collapse collapse" id="collapse">
                    <ul className="ml-auto navbar-nav">
                        <Link to="/" className={`nav-item nav-link ${(location.pathname == '' || location.pathname == '/' ) ? 'active' : ''}`}>
                            <li>Home</li>
                        </Link>
                        <Link to="/movie" className={`nav-item nav-link ${(location.pathname == '/movie' || location.pathname == '/movie/') ? 'active' : ''}`}>
                            <li>Movies</li>
                        </Link>
                    </ul>
                        <form className="form-inline" onSubmit={searchMovies}>
                            <input className="form-control mx-md-2" type="search" placeholder="Search" value={search} onChange={updateSearch}/>
                            
                                <button className="btn btn-secondary my-2">
                                    <Link to="/movie">
                                        <i className="fa fa-search text-light"></i>
                                    </Link>
                                </button>
                            
                        </form>
                </div>
            </div>
        </nav>
        <Loading show={isLoading} color="red" showSpinner={true}/>
        </>
    )
}

export default withRouter(Nav)