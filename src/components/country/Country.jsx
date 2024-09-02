import { useState } from 'react';
import './Country.css'
import Details from '../country-details/countryDetails';
const Country = ({country, handleVisited, showFlags}) => {
  const  {name, flags, population, area, cca3} = country;

  const [added, setAdded] = useState(false);
  const isAdded = () => {
    setAdded(!added);
  }
  const [isVisited, setMarkVisited] = useState(false);
  const markVisited = () => {
    setMarkVisited(!isVisited);
    handleVisited();
  }

  return (
    <div className={`box ${added ? 'added' : ''} ${isVisited? 'visited' : ''}`}>
      <h2>Name: {name?.common} </h2>
      <img src={flags.png} alt="Loading Image Please Wait A Few Seconds" />
      <h2>Population: {population}</h2>
      <h2>Area: {area} square km </h2>
      <h2>Country Code: {cca3} </h2>
      <button onClick={markVisited}>{isVisited? "Visited" : "Mark as visited" }</button>
      <button onClick={isAdded} > {added ? "Added" : "Add to visit list"} </button>
      <br />
      <button onClick={showFlags} >Show Flag</button>
      <hr />
      <Details 
      key={country.cca3} 
      handleVisited={()=> handleVisited(country)}
      showFlags={()=> showFlags(country)}
      country={country}
      ></Details>
    </div>
  );
};

export default Country;