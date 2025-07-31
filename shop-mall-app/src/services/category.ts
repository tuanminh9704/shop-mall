import { get } from "../utils/request"

export const getRootCategories = async () => {
    return await get('categories');
}

export const getCategoryWithChildrenById = async (id: number) => {
    return await get(`categories/${id}`);
}