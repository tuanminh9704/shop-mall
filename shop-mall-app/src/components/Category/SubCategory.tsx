import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

export const SubCategory = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const subCategories = [
    {
      name: "English Books",
      childrens: [
        {
          name: "Art & Photography",
        },
        {
          name: "Dictionary",
        },
      ],
    },
    {
      name: "Sách tiếng việt",
      childrens: [
        {
          name: "Sách văn học",
        },
        {
          name: "Sách kinh tế",
        },
      ],
    },
    {
      name: "Sách tiếng việt",
      childrens: [
        {
          name: "Sách văn học",
        },
        {
          name: "Sách kinh tế",
        },
      ],
    },
    {
      name: "Sách tiếng việt",
      childrens: [
        {
          name: "Sách văn học",
        },
        {
          name: "Sách kinh tế",
        },
      ],
    },
    {
      name: "Sách tiếng việt",
      childrens: [
        {
          name: "Sách văn học",
        },
        {
          name: "Sách kinh tế",
        },
      ],
    },
  ];
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
              <div className="text-[13px] font-medium p-3">
                {subCategory.name}
              </div>
              <div className="p-4">
                {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </div>

            {openIndex === index && (
              <div className="pl-6 pb-2 text-[12px] font-medium text-gray-600 border-b border-gray-200">
                {subCategory.childrens.map((child, i) => (
                  <div key={i} className="py-1 hover:underline">
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
