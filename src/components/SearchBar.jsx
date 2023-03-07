import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SearchBar = () => {
    return (
        <div className='search'>
            <div className='search-icon'><FontAwesomeIcon icon={faLocationDot} /> </div>
            <p className='search-txt'>Marseille, France</p>
            <button>Recherher</button>
        </div>
    );
}

export default SearchBar;
