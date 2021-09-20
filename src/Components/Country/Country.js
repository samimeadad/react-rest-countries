import React from 'react';
import './Country.css'

const Country = ( props ) => {
    const {name, capital, population, flag, region} = props.country;

    // console.log( props.country );

    return (
        <div className="country-container">
            <h2 className="country-name">{name}</h2 >
            <h5>Region: {region}</h5>
            <img className="country-flag" src={flag} alt="flag" />
            <h3>Capital: <span className="country-capital">{capital}</span></h3>
            <h4>Population: <span className="country-population">{population}</span></h4>
        </div >
    );
};

export default Country; <h4>This is a single Country</h4>