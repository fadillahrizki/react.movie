import React,{useEffect,useState,useContext} from 'react'
import {Link,withRouter,useLocation} from 'react-router-dom'
import {GET_GENRES} from '../api/Movie'
import {MovieContext} from './MovieContext'
import {SEARCH} from '../api/Movie'

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
        <nav className="navbar navbar-dark navbar-expand-md bg-dark sticky-top">
            <div className="container">
                <Link to="/react.movie" className="navbar-brand">
                    Movieee
                </Link>

                <button className="navbar-toggler" data-toggle="collapse" data-target="#collapse">
                    <i className="navbar-toggler-icon"></i>
                </button>
                <div className="navbar-collapse collapse" id="collapse">
                    <ul className="ml-auto navbar-nav">
                        <Link to="/react.movie" className={`nav-item nav-link ${(location.pathname == '/react.movie' || location.pathname == '/react.movie/' ) ? 'active' : ''}`}>
                            <li>Home</li>
                        </Link>
                        <Link to="/react.movie/movie" className={`nav-item nav-link ${(location.pathname == '/react.movie/movie' || location.pathname == '/react.movie/movie/') ? 'active' : ''}`}>
                            <li>Movies</li>
                        </Link>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Genres</a>
                            <div className="dropdown-menu dropdown-menu-right" style={{width:'500px'}}>
                                <div className="container">
                                    <div className="row">
                                    {
                                        (genres) ? 
                                            genres.genres.map(genre => (
                                                <div className="col-lg-4" key={genre.id}>
                                                    <a className="d-inline-block btn btn-dark w-100 mb-3" href="#">{genre.name}</a>
                                                </div>
                                            ))
                                            : ''
                                        }
                                    </div>
                                </div>
                            </div>
                        </li> */}
                    </ul>
                        <form className="form-inline" onSubmit={searchMovies}>
                            <input className="form-control mx-md-2" type="search" placeholder="Search" value={search} onChange={updateSearch}/>
                            
                                <button className="btn btn-secondary my-2">
                                    <Link to="/react.movie/movie">
                                        <i className="fa fa-search text-light"></i>
                                    </Link>
                                </button>
                            
                        </form>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Nav)