import logo from './logo.svg';
import './App.css';
import MovieCard from './components/MovieCard';
import React, { useEffect, useState } from 'react'
import Popular from './components/Popular';
import Toprated from './components/Toprated';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar';
import MovieDetails from './components/MovieDetails';
import Search from './components/Search';
import SearchResults from './components/SearchResults';

function App() {

  return (
    <Router>
    <div >
      {/* {console.log(movie)} */}
      <Navbar/>
      <Search/>
    {/* <MovieCard movie={movie}/> */}
    <Routes>
      <Route exact path='/' element={ <Home/>}/>
      <Route exact path='/details/:id' element={ <MovieDetails/>}/>
      <Route exact path='/search/:search' element={ <SearchResults/>}/>
    </Routes>
   
    </div>
    </Router>
  );
}

export default App;
