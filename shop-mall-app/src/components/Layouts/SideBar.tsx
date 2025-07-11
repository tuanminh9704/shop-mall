import type { FC } from "react";

export const SideBar: FC = () => {
  const isOpen = true;
  const categories = [
    { name: "Điện Thoại - Máy Tính Bảng", icon: "📱" },
    { name: "Laptop - Máy Tính", icon: "💻" },
    { name: "Laptop - Máy Tính", icon: "💻" },
    { name: "Laptop - Máy Tính", icon: "💻" },
    { name: "Laptop - Máy Tính", icon: "💻" },
  ];

  return (
    <div
      className={`left-0 w-64 bg-white shadow-md h-[calc(100vh-5rem)] p-4 z-40 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <h2 className="text-lg font-bold mb-4">Danh Mục Sản Phẩm</h2>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer"
          >
            <span className="mr-2 text-xl">{category.icon}</span>
            <span className="text-sm">{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
