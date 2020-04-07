import { GIFProps, GIFData } from "../../types";

export function getGifProps(gifData: GIFData): GIFProps {
    return {
        id: gifData.id,
        title: gifData.title,
        importedDaysAgo: getImportedAgoText(gifData.import_datetime),
        url: gifData.images.fixed_height.url
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