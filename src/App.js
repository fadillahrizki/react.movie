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
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/movie" exact component={MovieList} />
            <Route path="/movie/:id" exact component={DetailMovie} />
          </Switch>
        </div>
      </Router>
    </MovieProvider>
  )
}

export default App;
