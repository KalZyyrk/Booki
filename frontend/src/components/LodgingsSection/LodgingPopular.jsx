import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import LodgingPopularCart from './lodgingPopularCart';
import aubergeLaCanebiere from '../../assets/images/hebergements/emile-guillemot.jpg'
import chambreDHotesAuCoeurDeLEau from '../../assets/images/hebergements/aw-creative.jpg'
import hotelBleuEtBlanc from '../../assets/images/hebergements/febrian-zakaria2.jpg'

const LodgingPopular = () => {
    return (
        <article className='popular'>
            <div className='popular-title'><h1>Les plus populaires</h1><FontAwesomeIcon icon={faChartLine} /></div>
            <LodgingPopularCart img={aubergeLaCanebiere} name='Auberge la Canebière' price={71} rating={4} />
            <LodgingPopularCart img={chambreDHotesAuCoeurDeLEau} name="Chambre d'hôtes Au cœur de l'eau" price={71} rating={4} />
            <LodgingPopularCart img={hotelBleuEtBlanc} name='Hôtel Bleu et Blanc' price={68} rating={4} />
        </article>
    );
}

export default LodgingPopular;
