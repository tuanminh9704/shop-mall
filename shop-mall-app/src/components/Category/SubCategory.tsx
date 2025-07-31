import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Category } from "../../interfaces/categories";

interface SubCategoryProps {
  subCategories: Category[];
}

export const SubCategory = ({subCategories}: SubCategoryProps) => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleArrow = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  return (
    <div className="w-64 h-full bg-white rounded-md">
      <div className="font-medium p-4 border-b border-gray-200">
        Khám phá theo danh mục
      </div>
      <div>
        {subCategories.map((subCategory, index) => (
          <div key={index}>
            <div
              className={`flex items-center justify-between cursor-pointer hover:bg-gray-100 ${
                openIndex !== index ? "border-b border-gray-200" : ""
              }`}
              onClick={() => toggleArrow(index)}
            >
              <div onClick={() => navigate(`/${subCategory.slug}/${subCategory.id}`)} className="text-[13px] font-medium p-3">
                {subCategory.name}
              </div>
              <div className="p-4">
                {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </div>

            {openIndex === index && (
              <div className="pl-6 pb-2 text-[12px] font-medium text-gray-600 border-b border-gray-200">
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
