import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useParams } from 'react-router-dom';


const Similar = ({language}) => {
    const {id} = useParams()
    const [similar, setSimilar] =useState({})

    const fetchMovies = async()=>{
        const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=${language}&api_key=${process.env.API_KEY}`;
        
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
          
          await setSimilar(json);

          setTimeout(() => {
              console.log("id ",id)
              console.log("json ",json)
              console.log("data ",data)
              console.log("similar ",similar)
          }, 5000);
    }

    useEffect(()=>{
        fetchMovies()
    },[id])
  return (
    <div>
      <div className='h-25'>
        {/* {console.log(popularMovie.results)} */}
        <h2>
        {
          similar.results? "Similar Movies": ""
        }
        </h2>
        <Splide
        options={{
            perPage : 4,
            arrows : false,
            pagination : false,
            drag : "free",
            gap : "5rem"
          }}
          >

      {similar.results?.map((movie)=>{
        return (
            <SplideSlide key={movie.id}>
                <MovieCard movie={movie}/>
            </SplideSlide>
        )
      })}
        </Splide>
        
    </div>
    </div>
  )
}

export default Similar
