import type { Product } from "../../interfaces/products";

interface ProductDetailProps {
  productDetail: Product | null;
  selectedOption?: any | null;
  onSelectOption?: (optionId: number, value: any) => void;
}

export const ProductInfoDetail = ({
  productDetail,
  selectedOption,
  onSelectOption
}: ProductDetailProps) => {
  return (
    <div>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h1 className="text-xl font-semibold text-gray-800">
          {productDetail?.name}
        </h1>
        <p className="mt-4 text-red-500 text-3xl font-bold">655.000₫</p>
        <div>
          {productDetail?.productOption.map((option) => (
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
        <h2 className="text-[16px] font-[500]">Thông tin vận chuyển</h2>
        <p></p>
      </div>
    </div>
  );
};
