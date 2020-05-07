
export type TrendingEndpointConfig = (MainConfig & TrendingConfig);

export type RandomEndpointConfig = (MainConfig & RandomConfig);

export type GetGifsByIdsEndpointConfig = (MainConfig & GifsByIdsConfig);

export type TrendingResponse = {
    data: GIFData[];
    pagination: Pagination;
    meta: Metadata
}

export type RandomResponse = {
    data: GIFData;
    meta: Metadata;
}

export type GifsByIdsResponse = {
    data: GIFData[];
    pagination: Pagination;
    meta: Metadata
}

export type GIFData = {
    type: string;
    id: string;
    url: string;
    slug: string;
    bitly_gif_url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    title: string;
    rating: string;
    content_url: string;
    source_tld: string;
    source_post_url: string;
    is_sticker: number;
    import_datetime: string;
    trending_datetime: string;
    images: Image;
    user: User;
    analytics_response_payload: string;
    analytics: Analytics;
}

export type Pagination = {
    total_count: number;
    count: number;
    offset: number;
}

export type Metadata = {
    status: number;
    msg: string;
    response_id: string;
}

export type Image = {
    hd: PreviewImageInfo;
    downsized_large: BaseImageInfo;
    fixed_height_small_still: BaseImageInfo;
    original: OriginalImageInfo;
    fixed_height_downsampled: DownSampledImageInfo;
    downsized_still: BaseImageInfo;
    fixed_height_still: BaseImageInfo;
    downsized_medium: BaseImageInfo;
    downsized: BaseImageInfo;
    preview_webp: BaseImageInfo;
    original_mp4: BaseImageInfo;
    fixed_height_small: FixedHeightImageInfo;
    fixed_height: FixedHeightImageInfo;
    downsized_small: PreviewImageInfo;
    preview: PreviewImageInfo;
    fixed_width_downsampled: DownSampledImageInfo;
    fixed_width_small_still: BaseImageInfo;
    fixed_width_small: FixedHeightImageInfo;
    original_still: BaseImageInfo;
    fixed_width_still: BaseImageInfo;
    looping: LoopingImageInfo;
    fixed_width: FixedHeightImageInfo;
    preview_gif: BaseImageInfo;
    "480w_still": StillImageInfo;
}

export type BaseImageInfo = {
    height: string;
    size: string;
    url: string;
    width: string;
}

export type OriginalImageInfo = {
    frames: string;
    hash: string;
    height: string;
    mp4: string;
    mp4_size: string;
    size: string;
    url: string;
    webp: string;
    webp_size: string;
    width: string;
}

export type FixedHeightImageInfo = {
    height: string;
    mp4: string;
    mp4_size: string;
    size: string;
    url: string;
    webp: string;
    webp_size: string;
    width: string;
}

export type PreviewImageInfo = {
    height: string;
    mp4: string;
    mp4_size: string;
    width: string
}

export type DownSampledImageInfo = {
    height: string;
    size: string;
    url: string;
    webp: string;
    webp_size: string;
    width: string;
}

export type StillImageInfo = {
    url: string;
    width: string;
    height: string;
}

export type LoopingImageInfo = {
    mp4: string;
    mp4_size: string;
}

export type User = {
    avatar_url: string;
    banner_image: string;
    banner_url: string;
    profile_url: string;
    username: string;
    dispaly_name: string;
    is_verified: true;
}

export type Analytics = {
    onload: AnalyticsInfo;
    onclick: AnalyticsInfo;
    onsent: AnalyticsInfo;
}

export type AnalyticsInfo = {
    url: string;
}

type MainConfig = {
    url: string;
    endpoint: string;
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

type GifsByIdsConfig = {
    ids: string;
}

type Rating = "G" | "PG" | "PG-13" | "R";

