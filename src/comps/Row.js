import React, { useEffect, useState } from 'react';
import axios from '../axios';
import "../styles/row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({ title, fetchUrl, isLargeRow }) {

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
    }

    const baseUrl = "https://image.tmdb.org/t/p/original/";

    const[movies, setMovies] = useState([]);
    const[trailerUrl, setTrailer] = useState("");
    

    useEffect(() => {

        //if [] spusti iba jediny raz
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            
            return request;

        }
        fetchData();
    },[fetchUrl]);

 

    const handleClick = (x) => {
        console.log(x);
        if(trailerUrl) {
            setTrailer("");
        } else {
            
            console.log(movieTrailer( null, { tmdbId: x} ));
            movieTrailer( null, { tmdbId: x} )
            
            .then(url => {
                console.log(url);
                const urlParams =new URLSearchParams(new URL(url).search) ;
                setTrailer(urlParams.get('v'))
            })
            .catch((error) =>console.log(error));
        }

    }

    const handleClickFake = () => {
        if(trailerUrl) {
            setTrailer("");
        } else {
            
            setTrailer("fipVnRjUcyw");
        }

    }
    
  return (
  <div className='row' >
      
        <h2>{title}</h2>
        <div className='row-posters'>
            {movies.map(movie => (
                <img 
                
                key={movie.id}
                onClick={() => handleClick(movie.id)}
                className={`row-poster ${isLargeRow && "row-poster-large"}`}
                src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name} />
                

            ))}
        </div>

        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
  </div>
  )
}

export default Row;
