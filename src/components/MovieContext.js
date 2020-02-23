import React,{createContext,useState,useEffect} from 'react'
import {GET} from '../api/Movie'

export const MovieContext = createContext()

export const MovieProvider = (props) => { 
    const [isLoading,setLoading] = useState(true)
    const [datas,setDatas] = useState()
    const [search,setSearch] = useState('')
    const [curr,setCurr] = useState('discover')

    const getDatas = async () => {
        setDatas(await GET(curr))
        setLoading(false)
    }

    const value = [
        datas,setDatas,isLoading,setLoading,search,setSearch,curr,setCurr
    ]

    useEffect(()=>{
        getDatas()
    },[])

    return(
        <MovieContext.Provider value={value}>
            {props.children}
        </MovieContext.Provider>
    )
}