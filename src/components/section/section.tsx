import React from "react";
import { useFetch } from "../../hooks";
import { buildUrlTrendingEndpoint, getGifProps } from "../../data";
import { TrendingResponse } from "../../types";
import { GIFList } from "..";

export function Section(props: { title: string }) {

    const trendingGifs = useFetch<TrendingResponse>(
        buildUrlTrendingEndpoint({
            url: "https://api.giphy.com/v1/gifs",
            endpoint: "trending",
            key: "",
            limit: 20,
            rating: "G"
        })
    );

    return (
        <>
            <div>{props.title}</div>
            {trendingGifs !== undefined
                ? <GIFList gifCards={trendingGifs.data
                    .map(gifData =>
                        getGifProps(gifData, false)
                    )}
                />
                : <div>Loading...</div>}
        </>
    )
}