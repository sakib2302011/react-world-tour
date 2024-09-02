import {useState, useEffect } from "react";
import Country from "../country/Country";
import './Countries.css'
const Countries = () => {
  
  const  [countries, setCountries] = useState([]);
  const [visited, setVisited] = useState([]);
  const [flags, setFlags] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])

  const handleVisited = country => {
    const newVisitedCountries = [...visited , country];
    setVisited(newVisitedCountries);
  }

  const showFlags = country => {
    const newFlags = [...flags, country];
    setFlags(newFlags);
  }

  return (
    
    <div>
      <h2>Countries: {countries.length} </h2>
      <div>
        <h2>Visited Countries: {visited.length} </h2>
        {
          visited.map(country => <ul key={country.cca3} > {country.name.common} </ul>)
        }
      </div>
      <div className="flags-container" >
        {
          flags.map(flag => <img key={flag.cca3} src={flag.flags.png} ></img> )
        }
      </div>
      <div className="countries-container">
        {
          countries.map(country => <Country 
            key={country.cca3} 
            handleVisited={()=> handleVisited(country)}
            showFlags={()=> showFlags(country)}
            country={country} ></Country>)
        }
      </div>
      
    </div>
  );
};

export default Countries;