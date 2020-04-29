import React, { useState } from "react";
import "./gifPreview.css";
import { Loader } from "../loader";

export function GifPreview(props: { url: string, info: string, height: string, width: string }) {
    const [src, setSrc] = useState("/loading.gif");
    const [isDownloaded, setIsDownloaded] = useState(false);

    var downloadingImage = new Image();
    downloadingImage.src = props.url;
    downloadingImage.onload = function () {
        setSrc(props.url);
        setIsDownloaded(true);
    };

    return (
        <div style={{ width: `${props.width}px`, height: `${props.height}px` }}>
            {isDownloaded ? <img src={src} alt={`${props.info}`} /> : <Loader />}
        </div>
    )
}