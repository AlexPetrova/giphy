const likedGifIds: Set<string> = new Set<string>();

export function saveLike(id: string) {
    if (likedGifIds.has(id)) {
        likedGifIds.delete(id);
    }
    else {
        likedGifIds.add(id);
    }
    console.dir(likedGifIds);
}