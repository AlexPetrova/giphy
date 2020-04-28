import React, { useState } from 'react';
import "./like.css";

export function Like() {
    const [isLiked, setLiked] = useState(false);

    return (
        <div>
            <img
                src={isLiked
                    ? "/heart-filled.svg"
                    : "/heart.svg"}
                alt="heart icon"
                className="like-heart"
                onClick={() => setLiked(!isLiked)}
            />
        </div>
    )
}