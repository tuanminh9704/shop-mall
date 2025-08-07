import type { FC } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Category } from "../interfaces/categories";
import { SubCategory } from "../components/Category/SubCategory";
import { getCategoryWithChildrenById } from "../services/category";
import { DiscoverCategories } from "../components/Discover/DiscoverCategories";

export const CategoryPage: FC = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategoryWithChildrenById(Number(categoryId));
        setCategory(data[0]);
      } catch (err) {
        console.error("Error fetching category:", err);
      }
    };
    fetchData();
  }, [categoryId]);

  const hasChildren = category?.children && category.children.length > 0;

  return (
    <div className="flex">
      {hasChildren && (
        <aside className="w-1/4 p-4">
          <SubCategory subCategories={category.children} />
        </aside>
      )}
      <main className={`${hasChildren ? "w-3/4" : "w-full"} p-4`}>
        <h2 className="text-3xl font-bold mb-4 bg-white rounded-md pt-4 pb-4 pl-3.5">
          {category?.name}
        </h2>
        {hasChildren && (
          <DiscoverCategories subCategories={category.children} />
        )}
      </main>
    </div>
  );
};
