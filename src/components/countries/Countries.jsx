import {useState, useEffect } from "react";
import Country from "../country/Country";
import './Countries.css'
const Countries = () => {
  
  const  [countries, setCountries] = useState([]);
  const [visited, setvisited] = useState([]);
    
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])

  const handleVisited = country => {
    console.log('Add this to visited country');
    console.log(country);
  }

  return (
    
    <div>
      <h2>Countries: {countries.length} </h2>
      <div>
        <h2>Visited Countries:</h2>
        <ul>

        </ul>
      </div>
      <div className="countries-container">
        {
          countries.map(country => <Country 
            key={country.cca3} 
            handleVisited={handleVisited}
            country={country} ></Country>)
        }
      </div>
      
    </div>
  );
};

export default Countries;