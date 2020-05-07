export type LikeProps = {
    id: string;
    isLiked: boolean;
    onLikeClick: React.Dispatch<React.SetStateAction<string[]>>
}