import CountryData from "../countryData/countryData";


const Details = (props) => {
  // const {country, handleVisited, showFlags} = props;
  return (
    <div>
      <h2>Country Details</h2>
      <hr />
      <CountryData {...props} ></CountryData>
    </div>
  );
};

export default Details;