import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisited}) => {
  const  {name, flags, population, area, cca3} = country;

  const [added, setAdded] = useState(false);
  const isAdded = () => {
    setAdded(!added);
  }
  console.log(handleVisited);

  return (
    <div className={`box ${added && 'added'}`}>
      <h2>Name: {name?.common} </h2>
      <img src={flags.png} alt="Loading Image Please Wait A Few Seconds" />
      <h2>Population: {population}</h2>
      <h2>Area: {area} square km </h2>
      <h2>Country Code: {cca3} </h2>
      <button onClick={isAdded} > {added ? "Added" : "Add to visit list"} </button>
    </div>
  );
};

export default Country;