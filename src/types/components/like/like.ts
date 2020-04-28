export type LikeProps = {
    id: string;
    isLiked: boolean;
    onLikeClick: (id: string) => void;
}