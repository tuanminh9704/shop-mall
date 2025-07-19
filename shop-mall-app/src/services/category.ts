import { get } from "../utils/request"

export const getRootCategories = async () => {
    return await get('categories');
}