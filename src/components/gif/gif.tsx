import React from 'react';
import { GIFData } from '../../types';

export function GIF(props: GIFData) {
    return (
        <div>
            {props.id}
            {props.title}
            {props.url}
        </div>
    );
}