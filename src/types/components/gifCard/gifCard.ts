export type GIFCard = {
    id: string;
    title: string;
    url: string;
    width: string;
    importedDaysAgo: string;
    isLiked: boolean;
    saveLike: React.Dispatch<React.SetStateAction<string[]>>
}