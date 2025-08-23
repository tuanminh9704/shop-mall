import { get } from "../utils/request"

export const getAllBrands = async () => {
    return await get('brands');
}