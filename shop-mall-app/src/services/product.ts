import { get } from "../utils/request"

export const getProductByCategory = async (id: number, sortBy: string, order: string) => {
    return await get(`products/by-category/${id}?sortBy=${sortBy}&order=${order}`)
}