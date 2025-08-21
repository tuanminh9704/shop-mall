import { get } from "../utils/request"

export const getProductByCategory = async (id: number) => {
    return await get(`products/by-category/${id}`)
}