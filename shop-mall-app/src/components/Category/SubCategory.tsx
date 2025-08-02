import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Category } from "../../interfaces/categories";

interface SubCategoryProps {
  subCategories: Category[];
}

export const SubCategory = ({ subCategories }: SubCategoryProps) => {
  const navigate = useNavigate();
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggleArrow = (index: number) => {
    setOpenIndices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };
  return (
    <div className="w-64 h-full bg-white rounded-md">
      <div className="font-medium p-4 rounded-md border-b border-gray-200">
        Khám phá theo danh mục
      </div>
      <div>
        {subCategories.map((subCategory, index) => (
          <div key={index}>
            <div
              className={`flex items-center justify-between cursor-pointer hover:bg-gray-100 ${
                !openIndices.has(index) ? "border-b border-gray-200" : ""
              }`}
              onClick={() => toggleArrow(index)}
            >
              <div
                onClick={() =>
                  navigate(`/${subCategory.slug}/${subCategory.id}`)
                }
                className="text-[13px] font-medium p-3"
              >
                {subCategory.name}
              </div>
              {subCategory.hasChildrens && (
                <div className="p-4">
                  {openIndices.has(index) ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
              )}
            </div>

            {openIndices.has(index) && subCategory.hasChildrens && (
              <div className="pl-6 pb-2 text-[12px] font-medium text-gray-600 border-b border-gray-200 cursor-pointer">
                {subCategory.children.map((child, i) => (
                  <div
                    onClick={() => navigate(`/${child.slug}/${child.id}`)}
                    key={i}
                    className="py-1 hover:underline"
                  >
                    {child.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
