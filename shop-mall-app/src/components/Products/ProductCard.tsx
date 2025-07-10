import type { FC } from "react";

export const ProductCard: FC<{
  title: string;
  price: number;
  discount?: number;
  image: string;
}> = ({ title, price, discount, image }) => {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-2 font-semibold text-sm truncate">{title}</h3>
      <p className="text-red-500 font-bold">{price.toLocaleString("vi-VN")} ₫</p>
      {discount && (
        <p className="text-sm text-gray-500 line-through">
          {discount.toLocaleString("vi-VN")} ₫
        </p>
      )}
      <button className="mt-2 bg-[#0D48A6] text-white px-4 py-2 rounded hover:bg-[#083A8C] text-sm">
        Thêm vào giỏ
      </button>
    </div>
  );
};