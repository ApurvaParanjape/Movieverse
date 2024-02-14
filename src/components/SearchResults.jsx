import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import MovieCard from './MovieCard';

const SearchResults = () => {
    const [result, setResult] = useState({});
    const {search} = useParams();

    const fetchMovies = async()=>{
        const url = `https://api.themoviedb.org/3/search/movie?query=${search}&page=1&sort_by=released_date.desc&api_key=${process.env.API_KEY}`;
        
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
          
          await setResult(json);

          setTimeout(() => {
            
              console.log(result)
          }, 5000);
    }

    useEffect(()=>{
        fetchMovies()
    },[search])
  return (
    <div className='container'>
        <div className="row">
            {result.results?.map((movie)=>{
               return <div className='col-md-4  col-sm-6 col-xs-12 col-lg-3 my-2' key={movie.id}>
                <MovieCard movie={movie}/>
                
            </div>
            })}
        </div>
      
    </div>
  )
}

export default SearchResults
