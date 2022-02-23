import React, {useEffect, useState} from 'react';
import axios from '../axios';
import requests from '../requests';
import "../styles/banner.css";

function Banner() {


    

    const baseUrl = "https://image.tmdb.org/t/p/original/";

    const [movie, setMovie] = useState([]);
    

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1 )
            ]);
            return request;
        }
        fetchData();

    },[]);
    
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;

    }

    

    

  return (
    <header className='banner' style={{
        backgroundImage: `url("${baseUrl + movie?.backdrop_path}")`,
        backgroundPosition:"center center",
        backgroundSize: "cover",

    }}>
       
        <div className='banner-content'>
            <h1 className='banner-title' >{movie?.name || movie?.title || movie?.original_name}</h1>

            <div className='banner-buttons'>
                <button  className='banner-button'>Play</button>
                <button className='banner-button'>My list</button>
            </div>

            <h1 className='banner-descriptions'>
                {truncate(movie?.overview, 150)}
            </h1>
        </div>
        <div className='banner-fadeBottom'></div>

    </header>
  )
}

export default Banner;
