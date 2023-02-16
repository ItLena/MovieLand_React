import React from 'react'
import './searchBar.css'
import { useState } from 'react';

const SearchBar = ({ searchMovies}) => {
 
  const [searchTerm, setSearchTerm] = useState('');
  return (
   
    <div className='searchBar'>
        <input placeholder='Search for movies'
        value={searchTerm}
        onChange={((e)=> setSearchTerm(e.target.value))}
        onKeyUpCapture = {(() => searchMovies(searchTerm))}
       />
        <span className="material-symbols-outlined"
        onClick={(()=>searchMovies(searchTerm))}>search</span>
    </div>
  )
}
export default SearchBar 