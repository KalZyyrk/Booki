import React from 'react';
import Activity from './Activity';
import vieuxPort from '../../assets/images/activites/reno-laithienne.jpg'
import fortDePomègue from '../../assets/images/activites/paul-hermann.jpg'
import parcNational from '../../assets/images/activites/kilyan-sockalingum.jpg'
import notreDame from '../../assets/images/activites/florian-wehde.jpg'

const Activities = () => {
    return (
        <section className='activities'>
            <h1>Activités à Marseille</h1>
            <div className='list'>
                <Activity name='Vieux-Port' img={vieuxPort} />
                <Activity name='Fort de Pomègues' img={fortDePomègue} />
                <Activity name='Parc national des Calanques' img={parcNational} />
                <Activity name='Notre-Dame-de-la-Garde' img={notreDame} />
            </div>
        </section>
    );
}

export default Activities;
