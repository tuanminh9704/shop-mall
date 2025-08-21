import type { Product } from "../../interfaces/products";

import { getPriceRange } from "../../utils/getRangePrice";

export const GridProduct = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product: Product) => {
        const mainImage = product.images.find((img) => img.isMain)?.imageUrl;
        const priceRange = getPriceRange(product);

        return (
          <div key={product.id} className="bg-[#FFFFFF]">
            <a href="">
              <div className="w-full h-60 overflow-hidden rounded-md">
                <img
                  className="w-full h-full object-cover"
                  src={mainImage || "/no-image.png"} 
                  alt={product.name}
                />
              </div>
              <div className="p-3">
                <div className="text-[#FF4C57] text-[18px] font-medium">
                  {priceRange}
                </div>
                <h3>{product.name}</h3>
              </div>
              <div className="inline-block border border-[#E5E7EB] rounded-md px-3 py-1 text-[#8A8A93] text-sm">
                {product.productOption.length} Phân loại
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};
