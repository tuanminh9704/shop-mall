import type { Category } from "../interfaces/categories";
import type { Product } from "../interfaces/products";
import { useState, useEffect } from "react";
import { getCategoryWithChildrenById } from "../services/category";
import { getProductByCategory } from "../services/product";

interface BreadCrumb {
  categoryId: number;
  categoryName: string;
}

export const useCategoryWithProducts = (
  categoryId: number,
  searchParams: URLSearchParams
): {
  category: Category | null;
  products: Product[] | null;
  pagination: {
    total: number;
    page: number;
    pageSize: number;
  };
  breadCrumb: BreadCrumb[],
} => {
  const [category, setCategory] = useState<Category | null>(null);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [breadCrumb, setBreadCrumb] = useState([])
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    pageSize: 10,
  });

  useEffect(() => {
    const fetchData = async () => {
      const sortBy = searchParams.get("sortBy") || "";
      const order = searchParams.get("order") || "";
      const provincesParam = searchParams.get("provinces");
      const provinces = provincesParam
        ? provincesParam.split(",").map((id) => Number(id))
        : [];

      const brandsParam = searchParams.get("brands");
      const brands = brandsParam
        ? brandsParam.split(",").map((id) => Number(id))
        : [];

      const page = searchParams.get("page") || "1";

      const data = await getCategoryWithChildrenById(Number(categoryId));
      const records = await getProductByCategory(Number(categoryId), {
        sortBy,
        order,
        provinces,
        brands,
        page,
      });

      setCategory(data.categories[0]);
      setProducts(records.data);
      setPagination(records.pagination);
      setBreadCrumb(data.breadCrumb);
    };

    if (categoryId) fetchData();
  }, [categoryId, searchParams]);

  return { category, products, pagination, breadCrumb};
};
