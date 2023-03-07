import React from 'react';
import LodgingCart from './LodgingCart';
import hotelDuPort from '../../assets/images/hebergements/fred-kleber.jpg'
import hotelChezAmina from '../../assets/images/hebergements/febrian-zakaria.jpg'
import hotelLesMouettes from '../../assets/images/hebergements/reisetopia.jpg'
import hotelDeLaMer from '../../assets/images/hebergements/annie-spratt.jpg'
import aubergeLaCanebiere from '../../assets/images/hebergements/marcus-loke.jpg'
import aubergeLePanier from '../../assets/images/hebergements/nicate-lee.jpg'

const LodgingList = () => {
    return (
        <article className='list'>
            <h1>Hébergements à Marseille</h1>
            <LodgingCart name='Hôtel du port' img={hotelDuPort} price='52' rating={4} />
            <LodgingCart name='Hôtel Chez Amina' img={hotelChezAmina} price='96' rating={4} />
            <LodgingCart name='Hôtel Les mouettes' img={hotelLesMouettes} price='76' rating={4} />
            <LodgingCart name='Hôtel de la mer' img={hotelDeLaMer} price='46' rating={4} />
            <LodgingCart name='Auberge La Canebière' img={aubergeLaCanebiere} price='25' rating={4} />
            <LodgingCart name='Auberge Le Panier' img={aubergeLePanier} price='23' rating={4} />
            <h2>Afficher plus</h2>
        </article>
    );
}

export default LodgingList;
