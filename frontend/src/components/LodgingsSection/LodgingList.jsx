import React from 'react';
import { useEffect } from 'react';
import LodgingCart from './LodgingCart';
import data from '../../data/lodgingData.json'


const LodgingList = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/lodging');
                const jsonData = await response.json();
                console.log(jsonData);
            } catch (error) {
                console.log(error);
            }
        };
        setTimeout(fetchData, 0);
        return () => { };
    }, []);

    return (
        <article className='list'>
            <h1>Hébergements à Marseille</h1>
            {data.map(lodging =>
                <LodgingCart key={lodging.name} name={lodging.name} img={lodging.img} price={lodging.price} rating={lodging.rating} />
            )}
            <h2>Afficher plus</h2>
        </article>
    );
}

export default LodgingList;
