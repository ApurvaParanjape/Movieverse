import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import '@splidejs/react-splide/css';

const Popular = () => {
    const [popularMovie, setPopularMovie] = useState({});
  const fetchMovies = async()=>{
    const url=`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&sort_by=release_date.desc&api_key=536569e789de0e2b79cd3baa04654885`
    
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
      
      await setPopularMovie(json);
      console.log(popularMovie)
}
useEffect(()=>{
    fetchMovies()
},[])
  return (
    <div className='h-25'>
        {/* {console.log(popularMovie.results)} */}
        <h2>Popular Movies</h2>
        <Splide
        options={{
            perPage : 4,
            arrows : false,
            pagination : false,
            drag : "free",
            gap : "5rem"
          }}
          >

      {popularMovie.results?.map((movie)=>{
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

export default Popular
