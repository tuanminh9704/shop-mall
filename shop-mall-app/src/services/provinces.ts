import { get } from "../utils/request"

export const getAllProvinces = async () => {
    return await get('provinces');
}