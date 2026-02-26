import React, { use } from 'react';

const Countries = ({loadCountries}) => {
    const countriesData = use(loadCountries)
    const countries = countriesData.countries
    console.log(countries)
    return (
        <div>
            <h2>In the countries: {countries.length}</h2>
        </div>
    );
};

export default Countries;