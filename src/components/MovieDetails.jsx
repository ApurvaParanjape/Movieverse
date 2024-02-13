import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Similar from './Similar';

const MovieDetails = () => {
    const {id} = useParams()
    const [details, setDetails] = useState({});
    
    const fetchMovies = async(id)=>{
        const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=536569e789de0e2b79cd3baa04654885`;
        
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
          
          await setDetails(json);

        //   setTimeout(() => {
            
        //       console.log(details)
        //   }, 5000);
    }

    useEffect(()=>{
        fetchMovies(id)
        console.log(details)
    }, [])
  return (
    <div className='container'>
        <div className="row m-4">
            <div className="col-md-4 h-25" >
                {console.log(details)}
                <img className="card-img-top" src={details.poster_path ? `https://image.tmdb.org/t/p/original${details.poster_path}` : ""} alt="" />
            </div>
            <div className="col">
                <h1>{details.original_title}</h1>
                {/* <p><strong>{details.tagline}</strong></p> */}
                {/* <p><strong>Language: </strong>{details.spoken_languages[0]?.english_name}</p> */}
                {/* {console.log(details.spoken_languages[0]?.english_name)} */}
                {/* {console.log(details.spoken_languages[0].english_name)} */}
                <div>
                    <p><strong>Overview</strong></p>
                    <p>{details.overview}</p>
                </div>
                <div>
                    <p><strong>Genres: </strong>
                     {
                        details.genres?.map(element => {
                            console.log(element.name)
                            return <span>{element.name}, </span>
                        })
                     }
                    </p>
                </div>
                <p><strong>Budget: </strong>{details.budget}</p>
                <p><strong>Status: </strong>{details.status}</p>
                {/* <p><strong>IMDB Link: </strong><a href=""></a></p> */}
            </div>
        </div>

        <div className="row">
          <Similar language={details.original_language}/>
        </div>
      
    </div>
  )
}

export default MovieDetails
