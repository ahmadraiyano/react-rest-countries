import React, { use } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = ({ loadCountries }) => {
  const countriesData = use(loadCountries);
  const forbidden = countriesData.countries;

  const idToRemove = "Israel";
  const countries = forbidden.filter((obj) => obj.name.common !== idToRemove);

  return (
    <div>
      <h2>In the countries: {countries.length}</h2>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.ccn3.ccn3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
