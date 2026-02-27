import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries}) => {
    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        // setVisited(true)


        //1. toggle visited-not visited
        // if(visited){
            //     setVisited(false)
            // } else {
                //     setVisited(true)
                // }
                
                
        //2. toggle visited-not visited
        // setVisited(visited? false: true)

        
        //3. toggle visited-not visited
        setVisited(!visited)
        handleVisitedCountries(country)
    }

    
    return (
            <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 250000 ? "Big Country" : "Small Country"}</p>
            <p>{}</p>
            <button className={visited&& "btn-visited"} onClick={handleVisited}>{visited? "Visited": "Not Visited"}</button>
        </div>
    );}

export default Country;