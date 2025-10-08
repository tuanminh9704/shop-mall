import type { FC } from "react";

import { useParams } from "react-router-dom";
import { SubCategory } from "../components/Category/SubCategory";
import { DiscoverCategories } from "../components/Discover/DiscoverCategories";
import { GridProduct } from "../components/GridProduct/GridProduct";
import { SortBar } from "../components/SortBar/SortBar";
import { useSearchParams } from "react-router-dom";
import { FilterSearch } from "../components/FilterSearch/FilterSearch";
import { PaginationSection } from "../components/Pagination/PagiantionSection";
import { useCategoryWithProducts } from "../hooks/useCategoryWithProducts";
import { BreadCrumb } from "../components/BreadCrumb/BreadCrumb";

export const CategoryPage: FC = () => {
  const { categoryId } = useParams();

  const [searchParams] = useSearchParams();
  const { category, products, pagination, breadCrumb } =
    useCategoryWithProducts(Number(categoryId), searchParams);

  const hasChildren = category?.children && category.children.length > 0;

  return (
    <div className="w-full">
      <div className="w-ful px-4">
        <BreadCrumb breadCrumb={breadCrumb} />
      </div>
      <div className="flex w-full">
        <aside className="w-1/4 p-4">
          {hasChildren && (
            <div className="mb-5">
              <SubCategory subCategories={category?.children} />
            </div>
          )}
          <FilterSearch />
        </aside>

        <main className={`${hasChildren ? "w-3/4" : "w-full"} p-4`}>
          <h2 className="text-3xl font-bold mb-4 bg-white rounded-md pt-4 pb-4 pl-3.5">
            {category?.name}
          </h2>

          {hasChildren && (
            <DiscoverCategories subCategories={category?.children} />
          )}

          <div className="mt-5">
            <SortBar />
          </div>
          <div className="mt-5">
            <GridProduct products={products || []} />
          </div>
          <div className="mt-5">
            <PaginationSection pagination={pagination} />
          </div>
        </main>
      </div>
    </div>
  );
};
