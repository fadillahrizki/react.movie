import React from 'react'
import MovieList from './components/MovieList'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {MovieProvider} from './components/MovieContext'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Nav from './components/Nav'
import DetailMovie from './components/DetailMovie'
import Home from './components/Home'

const App = () => {
  return (
    <MovieProvider>
      <Router>
          <Nav />
          <Switch>
            <Route path="/react.movie/" exact component={Home}/>
            <Route path="/react.movie/movie" exact component={MovieList} />
            <Route path="/react.movie/movie/:id" exact component={DetailMovie} />
          </Switch>
      </Router>
    </MovieProvider>
  )
}

export default App;
