import React, { useState } from "react";
import "./gifPreview.css";

export function GifPreview(props: { url: string, info: string, height: string, width: string }) {
    const [src, setSrc] = useState("/loading.gif");
    const [className, setClass] = useState("loading");

    var downloadingImage = new Image();
    downloadingImage.src = props.url;
    downloadingImage.onload = function () {
        setSrc(props.url);
        setClass("");
    };

    return (
        <div style={{ width: `${props.width}px`, height: `${props.height}px` }}>
            <img
                className={className} src={src}
                alt={`${props.info}`}
            />
        </div>
    )
}