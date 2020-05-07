import {
    TrendingEndpointConfig, RandomEndpointConfig, GetGifsByIdsEndpointConfig
} from "../../types";

export function buildUrlRandomEndpoint(config: RandomEndpointConfig): string {
    return `${config.url}/${config.endpoint}?api_key=${config.key}&tag=${config.tag}$rating=${config.rating}`;
}

export function buildUrlTrendingEndpoint(config: TrendingEndpointConfig): string {
    return `${config.url}/${config.endpoint}?api_key=${config.key}&limit=${config.limit}$rating=${config.rating}`;
}

export function buildUrlGetGifsByIds(config: GetGifsByIdsEndpointConfig): string {
    return `${config.url}/${config.endpoint}?api_key=${config.key}&ids=${config.ids}`
}