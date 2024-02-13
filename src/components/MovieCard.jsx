import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const MovieCard = ({movie}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${movie.id}`)
    }
    return (
        <div onClick={handleClick}>
            {console.log(movie)}
            {/* <input name='search' value={search} onChange={(e)=> setSearch(e.target.value)}/> */}
            {/* <button onClick={fetchMovies} >get movie</button> */}
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={movie? `https://image.tmdb.org/t/p/original${movie.poster_path}`: ""} alt="Card image cap" />
                {console.log(`https://image.tmdb.org/t/p/original/${movie.poster_path}`)}
                <div className="card-body">
                    <p className="card-text">{movie? movie.original_title : "nothing"}</p>
                    {console.log(movie.original_title)}
                </div>
            </div>
        </div>
    )
}

export default MovieCard
