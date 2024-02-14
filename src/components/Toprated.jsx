import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import '@splidejs/react-splide/css';

const Toprated = () => {
    const [upcomingMovie, setUpcomingMovie] = useState({});
  const fetchMovies = async()=>{
    const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${process.env.API_KEY}`;
    
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzY1NjllNzg5ZGUwZTJiNzljZDNiYWEwNDY1NDg4NSIsInN1YiI6IjY1YjYzZGY0NjBjNTFkMDBjOWQwODYzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9vOn4sk7dFvc22fAWFfy57jGYQp1mO2mZPJ2BxxAS3w'
        }
      };
    const data = await fetch(url,options)
   

      const json = await data.json();
      
      console.log(json)
      
      await setUpcomingMovie(json);
      console.log(upcomingMovie)
}
useEffect(()=>{
    fetchMovies()
},[])
  return (
    
      <div className='h-25'>
        {/* {console.log(popularMovie.results)} */}
        <h2>Top Rated</h2>
        <Splide
        options={{
            perPage : 4,
            arrows : false,
            pagination : false,
            drag : "free",
            gap : "5rem"
          }}
          >

      {upcomingMovie.results?.map((movie)=>{
        return (
            <SplideSlide key={movie.id}>
                <MovieCard movie={movie}/>
            </SplideSlide>
        )
      })}
        </Splide>
    </div>
    
  )
}

export default Toprated
