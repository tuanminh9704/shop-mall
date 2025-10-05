import { FaStar } from "react-icons/fa";
import type { Product } from "../../interfaces/products";

interface ProductDetailProps {
  productDetail: Product | null;
}

export const ProductByBoxDetail = ({productDetail}: ProductDetailProps) => {
  return (
    <div className="bg-white">
      <div className="flex items-center gap-10 border-b border-gray-100 p-4">
        <div>
          <img
            src={productDetail?.brand?.logoUrl}
            alt=""
            className="w-12 h-12 object-contain rounded-full"
          />
        </div>
        <div>
          <span className="font-medium text-gray-800">
            {productDetail?.brand?.name}
          </span>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center gap-1 text-yellow-500">
              <span className="text-[16px] text-gray-700 font-[600]">4.7</span>
              <FaStar />
            </div>
            <div>
              <span className="text-[#808089]">(12k+ đánh giá)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-4">
          <img
            src="https://salt.tikicdn.com/cache/280x280/ts/product/54/35/2e/11beabb454181c78ba269ad1496cdeb5.jpg.webp"
            alt=""
            className="w-16 h-16 object-contain"
          />
          <span className="text-[16px] font-[400]">2XL, Xanh Đen</span>
        </div>

        <div className="mt-4">
          <h3 className="text-[16px] font-[500] mb-2">Số lượng</h3>
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition">
              –
            </button>

            <input
              type="text"
              className="w-12 h-8 text-center border border-gray-300 rounded outline-none focus:border-blue-500"
            />
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition">
              +
            </button>
          </div>
          <div className="mt-4">
            <span className="text-[16px] font-[500]">Tạm Tính</span>
            <p className="text-2xl font-bold">655.000₫</p>
          </div>
          <div className="mt-4">
            <button className="bg-[#FF424E] text-white w-full p-3 rounded-sm cursor-pointer mb-4 text-[18px]">
              Mua ngay
            </button>
            <button className="text-[#297BFF] w-full p-3 rounded-sm cursor-pointer mb-4 text-[18px] border border-[#297BFF]">
              Thêm vào giỏ hàng
            </button>
            <button className="text-[#297BFF] w-full p-3 rounded-sm cursor-pointer text-[18px] border border-[#297BFF]" >
              Mua trước trả sau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
