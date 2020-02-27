import React from 'react'
import MovieList from './components/MovieList'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'react-loading-bar/dist/index.css'
import './App.css'
import 'bootstrap'
import {MovieProvider} from './components/MovieContext'
import {HashRouter as Router,Switch,Route} from 'react-router-dom'
import Nav from './components/Nav'
import DetailMovie from './components/DetailMovie'
import Home from './components/Home'
import Footer from './components/Footer'
import jquery from 'jquery'
window.$ = jquery;
window.jQuery = jquery;
window.jquery = jquery;

const App = () => {
  return (
    <MovieProvider>
      <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/movie" exact component={MovieList} />
            <Route path="/movie/:id" exact component={DetailMovie} />
          </Switch>
          <Footer />
      </Router>
    </MovieProvider>
  )
}

export default App;
