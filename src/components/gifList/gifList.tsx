import React from 'react';
import "./gifList.css";
import { GIFList as GifListProps } from '../../types';
import { GIFCard } from '../gifCard';

export function GIFList(props: GifListProps) {
    return (
        <div className="gif-cards">
            {props.gifCards.map(card => {
                return <GIFCard
                    key={card.id}
                    {...card}
                />
            })}
        </div>
    )
}
