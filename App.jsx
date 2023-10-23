import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import { FaSearch } from "react-icons/fa";

import {BrowserRouter , Router, Routes, Route, Navigate, Link} from "react-router-dom";



/*setJsonResults =setFilms*/

function App() { 
  const [jsonResult, setJsonResults] = useState([]);        /* api fetct*/
  const [results, setResults] = useState("");        /*   event input handler*/
  useEffect(() => {
    axios.get("https://swapi.dev/api/films/").then((response)=> {setJsonResults(response.data.results)});
   
  }, []);


  
 


  return (
    <BrowserRouter>
   <div className="wrapper">
<div className="search">
      

        <FaSearch id="search-icon" />

        <input type="text" placeholder="Type to search..." onChange={(e) => setResults(e.target.value)}></input> 

        {
          jsonResult.filter((item) => {
          if (results === "") {
            return "";
          }
          else if (item.title.toLowerCase().includes(results.toLowerCase())) {
            return item;
          }
          else if (item.director.toLowerCase().includes(results.toLowerCase())) {
            return item;
          }
        }).map((item) => {
          return <ul className="results-list" key={item.title}><Link to="/FilmDetail" state={{jsonResult: jsonResult}}><li>Title: {item.title} | Release Date: {item.release_date}</li></Link>
          </ul>;
        })
        }

</div>
      </div>
     
      <Routes>
      <Route path="/FilmDetail" element="{<FilmDetail />}">

      </Route>
      </Routes>
     
      </BrowserRouter>
   
);


 }

export default App;


  