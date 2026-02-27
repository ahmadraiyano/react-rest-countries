import React, { use, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = ({ loadCountries }) => {
  const [visitedCountries, setVisitedCountries] = useState([])
  const [visitedFlags, setVisitedFlags] = useState([])
  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
  }
  const handleVisitedFlags = (flags) => {
    const newVisitedFlags = [...visitedFlags, flags]
    setVisitedFlags(newVisitedFlags)
  }
  const countriesData = use(loadCountries);
  const forbidden = countriesData.countries;

  const idToRemove = "Israel";
  const countries = forbidden.filter((obj) => obj.name.common !== idToRemove);

  return (
    <div>
      <h2>In the countries: {countries.length}</h2>
      <div>
        {visitedFlags.map(flag=> <img src={flag} />)}
      </div>
      <h3>Visited Countries: {visitedCountries.length}</h3>
      <ol>
        {visitedCountries.map(country=> <li>{country.name.common}</li>)}
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.ccn3.ccn3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
