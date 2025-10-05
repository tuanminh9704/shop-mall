import { ProductDetailImage } from "../components/Products/ProductImageDetail";
import { ProductInfoDetail } from "../components/Products/ProductInfoDetail";
import { ProductByBoxDetail } from "../components/Products/ProductBuyBoxDetail";
import { useEffect, useState } from "react";
import { getProductById } from "../services/product";
import { useSearchParams } from "react-router-dom";

import type { Product } from "../interfaces/products";

export const ProductDetail = () => {
  const [productDetail, setProductsDetail] = useState<Product | null>(null);
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!productId) return;
        const productDetailData: Product = await getProductById(
          Number(productId)
        );
        setProductsDetail(productDetailData);
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
    };
    fetchData();
  }, [productId]);

  return (
    <div className="max-w-7xl-auto px-4 py-8">
      <div className="grid grid-cols-10 gap-6">
        <div className="col-span-3 bg-white p-4 rounded-xl shadow-sm">
          <ProductDetailImage images={productDetail?.images ?? []}/>
        </div>
        <div className="col-span-4">
          <ProductInfoDetail productDetail={productDetail}/>
        </div>
        <div className="col-span-3 bg-white rounded-xl shadow-sm">
          <ProductByBoxDetail productDetail={productDetail}/>
        </div>
      </div>
    </div>
  );
};
