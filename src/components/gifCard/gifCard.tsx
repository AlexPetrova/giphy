import React from 'react';
import "./gifCard.css";
import { GIFCard as GIFCardProps } from '../../types';
import { Like } from '../like';
import { saveLike } from '../../data';

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
            <Like
                id={props.id}
                isLiked={props.isLiked}
                onLikeClick={saveLike}
            />
        </div>
    );
}