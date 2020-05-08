import { GIFData, GIFCard } from "../../types";

export function getGifProps(gifData: GIFData,
    saveLike: React.Dispatch<React.SetStateAction<string[]>>,
    isLiked: boolean
): GIFCard {
    return {
        id: gifData.id,
        title: gifData.title,
        importedDaysAgo: getImportedAgoText(gifData.import_datetime),
        url: gifData.images.fixed_height.url,
        width: gifData.images.fixed_height.width,
        saveLike: saveLike,
        isLiked: isLiked
    }
}

function getImportedAgoText(date: string): string {
    let days = getDaysFromNow(date);
    return days === 1
        ? `${days} day ago`
        : `${days} days ago`
}

function getDaysFromNow(date: string): number {
    const from = new Date(date).getTime();
    const now = new Date().getTime();
    const diffTime = Math.abs(now - from);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
}