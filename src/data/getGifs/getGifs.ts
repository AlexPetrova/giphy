import { TrendingEndpointConfig, RandomEndpointConfig, TrendingResponse } from "../../types";

export function getTrending(config: TrendingEndpointConfig): Promise<TrendingResponse | Error> {
    const url = buildUrlTrendingEndpoint(config);
    return fetch(url)
        .then(res => res.json())
        .catch(err => { throw err });
}

export function getRandom(config: RandomEndpointConfig): Promise<TrendingResponse | Error> {
    const url = buildUrlRandomEndpoint(config);
    return fetch(url)
        .then(res => res.json())
        .catch(err => { throw err });
}

function buildUrlRandomEndpoint(config: RandomEndpointConfig) {
    return `${config.url}/${config.endpoint}?api_key=${config.key}&tag=${config.tag}$rating=${config.rating}`;
}

function buildUrlTrendingEndpoint(config: TrendingEndpointConfig) {
    return `${config.url}/${config.endpoint}?api_key=${config.key}&limit=${config.limit}$rating=${config.rating}`;
}
