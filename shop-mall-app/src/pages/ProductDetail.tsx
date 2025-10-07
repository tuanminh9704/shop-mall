import { ProductDetailImage } from "../components/Products/ProductImageDetail";
import { ProductInfoDetail } from "../components/Products/ProductInfoDetail";
import { ProductByBoxDetail } from "../components/Products/ProductBuyBoxDetail";
import { useByBoxDetailWithProduct } from "../hooks/useByBoxDetailWithProduct";
import { useSearchParams } from "react-router-dom";

export const ProductDetail = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");

  const { productDetail, selectedOption, selectedVariant, handleSelectOption } =
    useByBoxDetailWithProduct(productId);

  return (
    <div className="max-w-7xl-auto px-4 py-8">
      <div className="grid grid-cols-10 gap-6">
        <div className="col-span-3 bg-white p-4 rounded-xl shadow-sm">
          <ProductDetailImage
            imageMain={selectedVariant?.imageUrl}
            images={productDetail?.images ?? []}
          />
        </div>

        <div className="col-span-4">
          <ProductInfoDetail
            productDetail={productDetail}
            selectedOption={selectedOption}
            onSelectOption={handleSelectOption}
          />
        </div>

        <div className="col-span-3 bg-white rounded-xl shadow-sm">
          <ProductByBoxDetail
            productDetail={productDetail}
            selectedOption={selectedOption}
            selectedVariant={selectedVariant}
          />
        </div>
      </div>
    </div>
  );
};
