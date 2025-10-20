export function paginate(items, pageNumber, pageSize) {
    const indxStart = (pageNumber - 1) * pageSize;
    return [...items].splice(indxStart, pageSize)
};