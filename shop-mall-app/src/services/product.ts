// services/product.ts
import { get } from "../utils/request"

export const getProductByCategory = async (
  id: number,
  options: {
    sortBy?: string;
    order?: string;
    provinces?: number[];
    brands?: number[];
  }
) => {
  const { sortBy, order, provinces, brands } = options;

  const query = new URLSearchParams();

  if (sortBy) query.append("sortBy", sortBy);
  if (order) query.append("order", order);
  if (provinces && provinces.length > 0) {
    query.append("provinces", provinces.join(","));
  }
  if (brands && brands.length > 0) {
    query.append("brands", brands.join(","));
  }

  return await get(`products/by-category/${id}?${query.toString()}`);
};
