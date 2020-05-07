import React, { useState } from "react";
import { useFetch } from "../../hooks";
import {
    buildUrlTrendingEndpoint, getGifProps,
    buildUrlGetGifsByIds
} from "../../data";
import { TrendingResponse, GifsByIdsResponse } from "../../types";
import { Loader, GIFList, SectionTitle } from "../../components";

export function Home() {
    const [liked, saveLike] = useState<string[]>([]);

    const trendingGifs = useFetch<TrendingResponse>(
        buildUrlTrendingEndpoint({
            url: "https://api.giphy.com/v1/gifs",
            endpoint: "trending",
            key: "",
            limit: 20,
            rating: "G"
        })
    );

    const likedGifs = useFetch<GifsByIdsResponse>(
        buildUrlGetGifsByIds({
            url: "https://api.giphy.com/v1",
            endpoint: "gifs",
            key: "",
            ids: liked.join(",")
        })
    );

    return (
        <>
            <SectionTitle title={"Trending"} />
            {trendingGifs === undefined
                ? <Loader />
                : <GIFList
                    gifCards={trendingGifs.data
                        .map(rawGif =>
                            getGifProps(rawGif, saveLike, liked.includes(rawGif.id))
                        )}
                />
            }

            <SectionTitle title={"Liked GIFs"} />
            {likedGifs === undefined
                ? <Loader />
                : <GIFList gifCards={likedGifs.data
                    .map(rawGif => getGifProps(rawGif, saveLike, liked.includes(rawGif.id)))}
                />
            }
        </>
    )
}