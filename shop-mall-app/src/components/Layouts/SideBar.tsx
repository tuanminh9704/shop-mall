import { useEffect, useState, type FC } from "react";
import { getRootCategories } from "../../services/category";
import type { Category } from "../../interfaces/categories";
import { useNavigate } from "react-router-dom";

export const SideBar: FC = () => {
  const navigate = useNavigate();
  const isOpen = true;
  const [rootCategories, setRootCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const rootCategoriesData = await getRootCategories();
        setRootCategories(rootCategoriesData);
      } catch (error) {
        console.log("[ERROR]: ", error);
      }
    };
    fetchApi();
  }, []);

  return (
    <div
      className={`left-0 w-64 h-full bg-white shadow-md  p-4 z-40 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <h2 className="text-[16px] font-medium mb-4">Danh mục</h2>
      <ul>
        {rootCategories.map((category) => (
          <li
            key={category.id}
            className="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer"
            onClick={() => navigate(`/${category.slug}/${category.id}`)}
          >
            <img
              src={category.icon}
              alt={category.name}
              className="w-8 h-8 object-contain mr-2"
            />
            <span className="text-sm">{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
