import React from "react";
import "./loader.css";

export function Loader() {
    return (
        <div className="loader-container">
            <img className="loader-image" src="/loading.gif" alt="loader" />
        </div>
    )
}