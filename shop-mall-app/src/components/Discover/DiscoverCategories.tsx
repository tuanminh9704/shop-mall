import type { Category } from "../../interfaces/categories";

interface SubCategoryProps {
  subCategories: Category[];
}

export const DiscoverCategories = ({subCategories} : SubCategoryProps) => {

  return (
    <div className="bg-white rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Khám phá theo danh mục</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {subCategories.map((cat, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <img
              src={cat.icon}
              alt={cat.name}
              className="w-24 h-24 object-cover rounded-full border border-gray-200 shadow-sm"
            />
            <p className="text-sm text-center font-medium">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
