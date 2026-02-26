import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({loadCountries}) => {
    const countriesData = use(loadCountries)
    const forbidden = countriesData.countries

    const idToRemove = "Israel";
    const countries = forbidden.filter(obj => obj.name.common !== idToRemove);
    
    return (
        <div>
            <h2>In the countries: {countries.length}</h2>
            {
                countries.map(country=> <Country key={country.ccn3.ccn3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;