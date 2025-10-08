import type { Product } from "../../interfaces/products";

interface ProductDetailProps {
  productDetail: Product | null;
  selectedOption?: any | null;
  selectedVariant?: any | null;
  onSelectOption?: (optionId: number, value: any) => void;
}

export const ProductInfoDetail = ({
  productDetail,
  selectedOption,
  selectedVariant,
  onSelectOption,
}: ProductDetailProps) => {
  return (
    <div>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h1 className="text-xl font-semibold text-gray-800">
          {productDetail?.product?.name}
        </h1>
        <p className="mt-4 text-red-500 text-3xl font-bold">655.000₫</p>
        <div>
          {productDetail?.product?.productOption.map((option) => (
            <div className="mt-4" key={option.id}>
              <h3 className="text-[16px] font-[500] mb-2">{option.name}</h3>
              <div>
                {option.values.map((value) => {
                  const isSelected = selectedOption?.some(
                    (opt: any) => opt.optionValue?.id === value.id
                  );
                  return (
                    <button
                      key={value.id}
                      onClick={() => onSelectOption?.(option.id, value)}
                      className={`mr-4 border px-2 py-1 rounded-xl shadow-sm transition 
        ${
          isSelected
            ? "border-blue-600 text-blue-800"
            : "border-gray-300 hover:border-blue-600"
        }`}
                    >
                      {value.value}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm mt-4">
        <h2 className="text-[18px] font-[500]">Thông tin vận chuyển</h2>
        <p className="mt-4 text-[14px]">Giao đến Tân Triều, Thanh Trì Hà Nội</p>
      </div>
      {productDetail?.specifications?.map((spec) => (
        <div key={spec.name} className="bg-white p-6 rounded-xl shadow-sm mt-4">
          <h2 className="text-[18px] font-[500] mb-4">{spec.name}</h2>

          <div className="space-y-3">
            {spec.attributes.map((attr) => (
              <div key={attr.code} className="flex justify-between text-[14px]">
                <span className="text-gray-600">{attr.name}</span>
                <span className="font-medium text-gray-800">
                  {attr.value || "—"}
                </span>
              </div>
            ))}
            <div className="flex justify-between text-[14px]">
              <span className="text-gray-600">Xuất xứ (Made in)</span>
              <span className="font-medium text-gray-800">
                {selectedVariant?.VariantInventory[0].warehouse.country}
              </span>
            </div>
          </div>
        </div>
      ))}
      <div className="bg-white p-6 rounded-xl shadow-sm mt-4">
        <h2 className="text-[18px] font-[500] mb-4">Mô tả sản phẩm</h2>
        <p className="mt-4 text-[14px]">
          {productDetail?.product?.description}
        </p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm mt-4">
        <h2 className="text-[18px] font-[500] mb-4">Sản phẩm tương tự</h2>

        <div className="grid grid-cols-4 gap-2">
          {productDetail?.relatedProducts &&
          productDetail.relatedProducts.length > 0 ? (
            productDetail.relatedProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col border border-gray-200 hover:border-blue-500 transition rounded-xl p-2 cursor-pointer"
              >
                <img
                  src={product.images?.[0]?.imageUrl || "/placeholder.png"}
                  className="object-contain w-full h-40 rounded-lg"
                  alt={product.name}
                />
                <p className="text-[13px] mt-2 line-clamp-2">{product.name}</p>
                <p className="text-[14px] mt-2 font-[500] text-blue-600">
                  {product.price.toLocaleString()}đ
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-4 text-center py-4">
              Không có sản phẩm tương tự.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
