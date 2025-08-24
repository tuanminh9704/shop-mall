import type { FC } from "react";
import type { Product } from "../interfaces/products";
import type { Category } from "../interfaces/categories";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SubCategory } from "../components/Category/SubCategory";
import { getCategoryWithChildrenById } from "../services/category";
import { DiscoverCategories } from "../components/Discover/DiscoverCategories";
import { GridProduct } from "../components/GridProduct/GridProduct";
import { getProductByCategory } from "../services/product";
import { SortBar } from "../components/SortBar/SortBar";
import { useSearchParams } from "react-router-dom";
import { FilterSearch } from "../components/FilterSearch/FilterSearch";

export const CategoryPage: FC = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState<Category | null>(null);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
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
        const data = await getCategoryWithChildrenById(Number(categoryId));
        const productRecords = await getProductByCategory(Number(categoryId), {
          sortBy,
          order,
          provinces,
          brands,
        },);
        setCategory(data[0]);
        setProducts(productRecords);
      } catch (err) {
        console.error("Error fetching category:", err);
      }
    };
    fetchData();
  }, [categoryId, searchParams]);

  const hasChildren = category?.children && category.children.length > 0;

  return (
    <div className="flex">
      {
        <aside className="w-1/4 p-4">
          {hasChildren && (
            <div className="mb-5">
              <SubCategory subCategories={category.children} />
            </div>
          )}
          <div>
            <FilterSearch/>
          </div>
        </aside>
      }
      <main className={`${hasChildren ? "w-3/4" : "w-full"} p-4`}>
        <h2 className="text-3xl font-bold mb-4 bg-white rounded-md pt-4 pb-4 pl-3.5">
          {category?.name}
        </h2>
        {hasChildren && (
          <DiscoverCategories subCategories={category.children} />
        )}

        <div className="mt-5">
          <SortBar />
        </div>
        <div className="mt-5">
          <GridProduct products={products || []} />
        </div>
      </main>
    </div>
  );
};
