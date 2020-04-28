import {
    TrendingEndpointConfig, RandomEndpointConfig
} from "../../types";

export function buildUrlRandomEndpoint(config: RandomEndpointConfig): string {
    return `${config.url}/${config.endpoint}?api_key=${config.key}&tag=${config.tag}$rating=${config.rating}`;
}

export function buildUrlTrendingEndpoint(config: TrendingEndpointConfig): string {
    return `${config.url}/${config.endpoint}?api_key=${config.key}&limit=${config.limit}$rating=${config.rating}`;
}
