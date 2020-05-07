import React, { useState } from 'react';
import { LikeProps } from '../../types';
import "./like.css";

export function Like(props: LikeProps) {

    const [isLiked, setLiked] = useState(props.isLiked);
    const classNames = `${isLiked ? "liked-text fade-in" : "like-text"}`;

    return (
        <div className="like-container">
            <img
                src={isLiked
                    ? "/heart-filled.svg"
                    : "/heart.svg"}
                alt="heart icon"
                className="like-heart"
                onClick={() => {
                    setLiked(!isLiked);
                    props.onLikeClick(prevState => {
                        return isLiked
                            ? prevState.filter(value => value !== props.id)
                            : [...prevState, props.id]
                    });
                }}
            />
            <span className={classNames}>
                {isLiked ? "Liked!" : "Like"}
            </span>
        </div>
    )
}