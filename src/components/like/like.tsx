import React, { useState } from 'react';
import "./like.css";

export function Like() {
    const [isLiked, setLiked] = useState(false);
    const classNames = `${isLiked ? "liked-text fade-in" : "like-text"}`;

    return (
        <div className="like-container">
            <img
                src={isLiked
                    ? "/heart-filled.svg"
                    : "/heart.svg"}
                alt="heart icon"
                className="like-heart"
                onClick={() => setLiked(!isLiked)}
            />
            <span className={classNames}>
                {isLiked ? "Liked!" : "Like"}
            </span>
        </div>
    )
}