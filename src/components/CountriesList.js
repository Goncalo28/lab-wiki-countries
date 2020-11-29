import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = props => {
    return (
        <>
            {props.countries.map(country => {
                return (
                    <Link key={country.cca3} className='list-group-item list-group-item-action' to={'/' + country.cca3}>
                        <span role='img'>{country.flag}</span> {country.name.common}
                    </Link>
                );
            })}
        </>
    );
};

export default CountriesList;