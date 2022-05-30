import React from 'react';

import './index.scss';

interface CardInterface {
    id: number;
    musicName: string;
    channel: string;
    album: string;
    urlImage: string;
}

function Card ({id, musicName, channel, album, urlImage}: CardInterface) {
    return (
        <div className="flex card">
            <div className="round music-image">
                <img src={urlImage} alt={musicName} />
            </div>
            <div className="music-details">
                <div className='enabled'>{musicName}</div>
                <div className='disabled'>{channel} • {album}</div>
            </div>
        </div>
    );
}

export type { CardInterface };

export default Card;

