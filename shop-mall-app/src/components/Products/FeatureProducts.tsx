import type { FC } from "react";
import { ProductCard } from "./ProductCard";

export const FeaturedProducts: FC = () => {
  const products = [
    {
      title: "iPhone 14 Pro",
      price: 25990000,
      discount: 29990000,
      image: "https://salt.tikicdn.com/cache/750x750/ts/product/a5/61/ee/62094b28a85fc2a18142d2a94f3de769.jpg.webp",
    },
    {
      title: "Laptop Dell XPS 13",
      price: 32990000,
      image: "https://salt.tikicdn.com/cache/750x750/ts/product/22/33/94/84870820055e41561ec70821274f9937.jpg.webp",
    },
    {
      title: "Áo Thun Nam Cao Cấp",
      price: 199000,
      discount: 250000,
      image: "https://salt.tikicdn.com/cache/750x750/ts/product/b4/1a/57/1fa9eaed20683ff8a01e45f518f54ac9.jpg.webp",
    },
    {
      title: "Sách Giáo Khoa Lớp 12",
      price: 50000,
      image: "https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/f6/ca/71/64ecb7bb7f3de7622ee1e10a3c85d409.jpg.webp",
    },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-4 text-[#ef4b5e]">TOP DEAL & SIÊU RẺ</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            discount={product.discount}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};