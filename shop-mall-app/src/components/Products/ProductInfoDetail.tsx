import type { Product } from "../../interfaces/products";

interface ProductDetailProps {
  productDetail: Product | null;
}

export const ProductInfoDetail = ({ productDetail }: ProductDetailProps) => {
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
                {option.values.map((value) => (
                  <button className="mr-4 border border-gray-300 px-4 py-2 rounded-xl shadow-sm hover:border-blue-600 transition">
                    {value.value}
                  </button>
                ))}
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
