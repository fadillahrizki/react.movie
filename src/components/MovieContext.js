import React,{createContext,useState,useEffect} from 'react'
import {GET} from '../api/Movie'

export const MovieContext = createContext()

export const MovieProvider = (props) => { 
    const [isLoading,setLoading] = useState(true)
    const [datas,setDatas] = useState()
    const [search,setSearch] = useState('')

    const getDatas = async () => {
        setDatas(await GET())
        setLoading(false)
    }

    useEffect(()=>{
        getDatas()
    },[])

    return(
        <MovieContext.Provider value={[datas,setDatas,isLoading,setLoading,search,setSearch]}>
            {props.children}
        </MovieContext.Provider>
    )
}