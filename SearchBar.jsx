import React, { useState, useEffect } from 'react';
import axios from "axios";




/*

export function SearchBars  () => { 

  const [jsonResult, setJsonResults] = useState([]);         
  const [results, setResults] = useState("");             
 
  useEffect(() => {
    axios.get("https://swapi.dev/api/films/").then((response)=> {setJsonResults(response.data.results)});
   
  }, []);


  
 


  return (
    
   
   <div className="wrapper">
      <div className="search">
        <h1>Start War</h1>
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
          return <ul className="results-list" key={item.title}><li>Title: {item.title} | Release Date: {item.release_date}</li>
          </ul>;
        })
        }


      </div>


    </div>

    
    
);


  }

export default SearchBar;*/













/*export  const SearchBar = () => {
    const [jsonResult, setJsonResults] = useState([]);
    const [results, setResults] = useState([]);

    const fetchData = (value) => {
        fetch("https://swapi.dev/api/people/")
        .then((response) => response.json())
        .then((json) => { 
           setJsonResults(json.data.title)
        });


  
    };


const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
  };
    const onChange = (e) => {
        
            
            // setQuery text to update value
            setResults(e.target.value);
          
    };

    return (
        <div className="input-wrapper">
          <FaSearch id="search-icon"/>
          <input placeholder="Type to search..." value={jsonResult} onChange={onChange} onSubmit={handleSubmit}></input>
        </div>
    );
};

*/