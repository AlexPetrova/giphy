import React from 'react';
import { GIFProps } from '../../types';
import "./gif.css";

export function GIF(props: GIFProps) {

    return (
        <div className="gif-container">

            <div className="gif">

                <img src={props.url} />

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