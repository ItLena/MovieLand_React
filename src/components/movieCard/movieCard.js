import React from 'react'

import './movieCard.css'


const MovieCard = ({movie}) => {
    return (
        <div className='card'>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'http://via.placeholder.com/400'} alt={movie.Title}></img>
            <div>
                <span className='row1'>
                    <p>{movie.Type}</p>
                    <p>{movie.Year}</p>                   
                </span> 
                <h3 className='title'>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard
