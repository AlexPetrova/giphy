import React, { useState } from 'react';
import { LikeProps } from '../../types';
import "./like.css";

export function Like(props: LikeProps) {

    const classNames = `${props.isLiked ? "liked-text fade-in" : "like-text"}`;

    return (
        <div className="like-container">
            <img
                src={props.isLiked
                    ? "/heart-filled.svg"
                    : "/heart.svg"}
                alt="heart icon"
                className="like-heart"
                onClick={() => {
                    props.onLikeClick(prevState => {
                        return props.isLiked
                            ? prevState.filter(value => value !== props.id)
                            : [...prevState, props.id]
                    });
                }}
            />
            <span className={classNames}>
                {props.isLiked ? "Liked!" : "Like"}
            </span>
        </div>
    )
}