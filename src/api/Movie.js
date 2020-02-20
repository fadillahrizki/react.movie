const API_KEY = '22f64047628952782f5bfe42dd718a65'
const BASE_URL = 'https://api.themoviedb.org/3'

export const GET = async () => {
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}`)
    const datas = await response.json()
    return datas
}

export const SINGLE = async (ID) => {
    const response = await fetch(`${BASE_URL}/movie/${ID}?api_key=${API_KEY}`)
    const data = await response.json()
    return data
}

export const SEARCH = async (QUERY) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${QUERY}`)
    const datas = await response.json()
    return datas
}

export const NEXT_PAGE = async (PAGE,QUERY) => {
    if(QUERY !== undefined){
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${QUERY}&page=${PAGE+1}`)
        const datas = await response.json()
        return datas
    }

    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${PAGE+1}`)
    const datas = await response.json()
    return datas
}

export const PREV_PAGE = async (PAGE,QUERY) => {
    if(QUERY !== undefined){
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${QUERY}&page=${PAGE-1}`)
        const datas = await response.json()
        return datas
    }

    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${PAGE-1}`)
    const datas = await response.json()
    return datas
}