import type { FC } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Category } from "../interfaces/categories";
import { SubCategory } from "../components/Category/SubCategory";
import { getCategoryWithChildrenById } from "../services/category";

export const CategoryPage: FC = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategoryWithChildrenById(Number(categoryId));
        setCategory(data);
      } catch (err) {
        console.error("Error fetching category:", err);
      }
    };
    fetchData();
  }, [categoryId]);

  console.log(category);

  return (
    <div>
      <div>
        <aside>
          {category?.children && (
            <SubCategory subCategories={category.children} />
          )}{" "}
        </aside>
      </div>
    </div>
  );
};
