import React from 'react';
import './App.css';

import Row from './comps/Row';
import Banner from "./comps/Banner";
import Navbar from "./comps/Navbar";

import request from './requests';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row isLargeRow title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={request.fetchTopRated}/>
      <Row title="Action movies" fetchUrl={request.fetchActionMovies}/>
      
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
    </div>
  );
}

export default App;
