import React from 'react';
import SearchBar from './SearchBar';
import Filter from './Filters/Filter';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Info = () => {
    return (
        <section className="info">
            <h1>Trouvez votre Hébergement pour des vacances de rêve</h1>
            <p>En plein centre-ville ou pleine nature</p>
            <SearchBar />
            <Filter />
            <div className="info-bar"><div className='info-bar-icon'><FontAwesomeIcon icon={faInfo} /></div><p>Plus de 500 logements sont disponibles dans cette ville</p></div>
        </section>
    );
}

export default Info;
