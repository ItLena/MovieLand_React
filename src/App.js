
import { useState, useEffect } from 'react';
import './App.css';
import React from 'react';
import SearchBar from './components/searchBar/searchBar';
import MovieCard from './components/movieCard/movieCard';


function App() {
  const url = 'http://www.omdbapi.com?apikey=c032e2d7';
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <div className='top-container'>
      <h1 className='top-title'>MovieLand</h1>
      <SearchBar  searchMovies = {searchMovies}></SearchBar>

      {
        movies?.length > 0 ?

          (<div className='cards-container'>
            {movies.map((movie) => (<MovieCard movie={movie} />))}
          </div>) :
          <h2>No movies found</h2>
      }


    </div>
  );
}

export default App;
