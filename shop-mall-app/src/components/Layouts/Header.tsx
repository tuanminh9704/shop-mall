import { FaSearch, FaUser, FaShoppingCart, FaHome  } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm py-5 border-b border-[#EBEBF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex flex-col items-center">
            <a href="/">
              <p className="text-4xl font-bold text-[#0D48A6]">ShopMall</p>
            </a>
            <span className="text-xl text-[#0D48A6] font-medium mt-1">
              Tốt & Nhanh
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-8">
            <div className="relative">
              <img
                src="https://salt.tikicdn.com/ts/upload/33/d0/37/6fef2e788f00a16dc7d5a1dfc5d0e97a.png"
                alt="Search Icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
              />
              <input
                type="text"
                placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
                className="w-full pl-10 pr-4 py-2 border border-[#EBEBF0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D48A6] text-sm"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#0D48A6] text-white px-4 py-1 rounded-md text-sm hover:bg-[#083A8C]">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Account and Cart */}
          <div className="flex items-center gap-6">
            <a href="/account" className="flex items-center gap-2 text-sm text-[#38383D] hover:text-[#0D48A6]">
              <FaHome className="h-5 w-5" />
              <span>Trang chủ</span>
            </a>
            <a href="/account" className="flex items-center gap-2 text-sm text-[#38383D] hover:text-[#0D48A6]">
              <FaUser className="h-5 w-5" />
              <span>Tài khoản</span>
            </a>
            <a href="/cart" className="flex items-center gap-2 text-sm text-[#38383D] hover:text-[#0D48A6]">
              <FaShoppingCart className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};