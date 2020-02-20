import React,{useContext} from 'react'
import {MovieContext} from './MovieContext'
import {SEARCH,GET} from '../api/Movie'

const Search = () =>{
    const [datas,setDatas,isLoading,setLoading,search,setSearch] = useContext(MovieContext)

    const updateSearch = (e) => {
        setSearch(e.target.value)   
    }

    const searchMovies =  async (e) => {
        await e.preventDefault()
        setLoading(true)
        setDatas(await SEARCH(search))
        setLoading(false)
    }

    const reset = async () => {
        setSearch('')
        setLoading(true)
        setDatas(await GET())
        setLoading(false)
    }

    return(
        <form onSubmit={searchMovies} className="d-flex justify-content-between">    
            <div className="input-group col-lg-6">
                <input type="text" name="search" className="form-control" placeholder="title" value={search} onChange={updateSearch} required/>
            </div>
            <div className="btn-group">
                <button className="btn btn-success">Search</button>
                <button className="btn btn-info" type="button" onClick={reset} >Reset</button>
            </div>
        </form>
    )
}

export default Search