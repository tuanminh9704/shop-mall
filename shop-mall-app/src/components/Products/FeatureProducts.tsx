import type { FC } from "react";
import { ProductCard } from "./ProductCard";

export const FeaturedProducts: FC = () => {
  const products = [
    {
      title: "iPhone 14 Pro",
      price: 25990000,
      discount: 29990000,
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Laptop Dell XPS 13",
      price: 32990000,
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Áo Thun Nam Cao Cấp",
      price: 199000,
      discount: 250000,
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Sách Giáo Khoa Lớp 12",
      price: 50000,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-4">Sản Phẩm Nổi Bật</h2>
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