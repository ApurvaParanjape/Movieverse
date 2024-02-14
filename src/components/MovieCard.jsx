import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

const MovieCard = ({movie}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/details/${movie.id}`)
    }
    return (
        <div onClick={handleClick}>
            {console.log(movie)}
            {/* <input name='search' value={search} onChange={(e)=> setSearch(e.target.value)}/> */}
            {/* <button onClick={fetchMovies} >get movie</button> */}
            <div className="card bg-dark text-white" style={{width: '18rem'}}>
                <img className="card-img-top" src={movie? `https://image.tmdb.org/t/p/original${movie.poster_path}`: ""} alt="Card image cap" />
                {console.log(`https://image.tmdb.org/t/p/original/${movie.poster_path}`)}
                <div className="card-body d-flex justify-content-between align-items-top">
                    <p className="card-text">{movie? movie.original_title : "nothing"}</p>
                    <div className='d-flex'>
                    <i className={`bi bi-star-fill mx-1 text-success ${movie.vote_average>8? 'text-success': movie.vote_average>5? "text-warning": "text-danger"}`}></i>
                    <p className={movie.vote_average>8? 'text-success': movie.vote_average>5? "text-warning": "text-danger"}>{movie? movie.vote_average: ""}</p>
                    </div>
                    {console.log(movie.original_title)}
                </div>
            </div>
        </div>
    )
}

export default MovieCard
