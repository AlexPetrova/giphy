import React from 'react';
import "./gif.css";
import { GIFCard as GIFCardProps } from '../../types';

export function GIFCard(props: GIFCardProps) {

    return (
        <div className="gif-container">
            <div className="gif">
                <img src={props.url} alt={`${props.title}`} />
                <div className="gif-title">
                    {props.title}
                </div>
                <div className="gif-imported-date">
                    {props.importedDaysAgo}
                </div>
            </div>
        </div>
    );
}