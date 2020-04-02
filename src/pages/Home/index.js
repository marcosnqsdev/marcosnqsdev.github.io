import React from 'react';

import './styles.css';

import ImgPerfil from '../../assets/perfil.jpeg';

export default function Home() {
    return (
        <div className="home-container">
            <img src={ImgPerfil} alt="marcosnqsdev" />

            <h1>Marcos Natã</h1>
            <div className="description">
                
            </div>
        </div>
    );
}