import './Country.css'
const Country = ({country}) => {
  const  {name, flags} = country;
  return (
    <div className='box'>
      <h2>Name: {name?.common} </h2>
      <img src={flags.png} alt="Loading Image Please Wait A Few Seconds" />
    </div>
  );
};

export default Country;