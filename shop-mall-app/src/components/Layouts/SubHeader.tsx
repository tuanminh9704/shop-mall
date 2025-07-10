export const SubHeader = () => {
  return (
    <div className="bg-white py-3 border-b border-[#EBEBF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-[#38383D]">
        <div className="flex space-x-4">
          <span className="flex items-center">
            <span className="mr-1">Cam kết</span>
            <span className="text-[#0D48A6] font-medium">100% hàng thật</span>
          </span>
          <span className="flex items-center">
            <span className="mr-1">Freeship</span>
            <span className="text-[#0D48A6] font-medium">đơn từ 0đ</span>
          </span>
          <span className="flex items-center">
            <span className="mr-1">Hoàn</span>
            <span className="text-[#0D48A6] font-medium">
              200% nếu hàng giả
            </span>
          </span>
          <span className="flex items-center">
            <span className="mr-1">30 ngày</span>
            <span className="text-[#0D48A6] font-medium">đổi trả</span>
          </span>
          <span className="flex items-center">
            <span className="mr-1">Giao hàng</span>
            <span className="text-[#0D48A6] font-medium">2h</span>
          </span>
          <span className="flex items-center">
            <span className="mr-1">Giá sốc</span>
            <span className="text-[#0D48A6] font-medium">ré</span>
          </span>
        </div>
        <div className="text-right">
          <span className="text-[#0D48A6] font-medium">
            Giao đến: Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội
          </span>
        </div>
      </div>
    </div>
  );
};
