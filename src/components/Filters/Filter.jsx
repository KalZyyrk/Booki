import React from 'react';
import FilterChoice from './FilterChoice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faHeart, faMoneyBillWave, faPaperclip, faPerson } from '@fortawesome/free-solid-svg-icons';

const Filter = () => {
    return (
        <div className='filter'>
            <h1>Filtres</h1>
            <FilterChoice name='Économique' icon={<FontAwesomeIcon icon={faMoneyBillWave} />} />
            <FilterChoice name='Familial' icon={<FontAwesomeIcon icon={faPerson} />} />
            <FilterChoice name='Romantique' icon={<FontAwesomeIcon icon={faHeart} />} />
            <FilterChoice name='Nos pépites' icon={<FontAwesomeIcon icon={faFire} />} />
        </div>
    );
}

export default Filter;
