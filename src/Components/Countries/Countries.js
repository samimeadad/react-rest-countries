import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [ countries, setCountries ] = useState( [] );

    useEffect( () => {
        fetch( 'https://github.com/ProgrammingHero1/rest-countries-data/blob/main/coutries.JSON' )
            .then( res => res.json() )
            .then( data => setCountries( data ) );
    }, [] );

    return (
        <div>
            <h1 className="bg-dark text-secondary fw-bold pb-2 mb-4">Total Countries Loaded: { countries.length }</h1>
            <div className="countries-container">
                {
                    countries.map( country => <Country
                        key={ country.alpha2Code }
                        country={ country }></Country> )
                }
            </div>
        </div >
    );
};

export default Countries;