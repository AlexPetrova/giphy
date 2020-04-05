
export type TrendingEndpointConfig = (MainConfig & TrendingConfig);

export type RandomEndpointConfig = (MainConfig & RandomConfig);

export type Trending = {
    data: GIFData[];
    pagination: Pagination;
    meta: Meta
}

export type GIFData = {
    id: string;
    url: string;
    embed_url: string;
    title: string;
}

export type Pagination = {

}

export type Meta = {

}

type MainConfig = {
    url: string;
    endpoint: Endpoint;
    key: string
}

type TrendingConfig = {
    limit: number;
    rating: Rating;
}

type RandomConfig = {
    tag: string;
    rating: string;
}

type Rating = "G" | "PG" | "PG-13" | "R";

type Endpoint = "trending" | "random";
