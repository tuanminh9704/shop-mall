import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="bg-[#F5F6F7] py-6 border-t border-[#EBEBF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-[#0D48A6] mb-4">Liên hệ</h3>
            <p className="text-sm text-[#38383D]">
              Email: vuminh97abc@gmail.com<br />
              Hotline: 0559629178
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#0D48A6] mb-4">Liên kết nhanh</h3>
            <ul className="text-sm text-[#38383D] space-y-2">
              <li><a href="/about" className="hover:text-[#0D48A6]">Về chúng tôi</a></li>
              <li><a href="/policy" className="hover:text-[#0D48A6]">Chính sách đổi trả</a></li>
              <li><a href="/terms" className="hover:text-[#0D48A6]">Điều khoản sử dụng</a></li>
              <li><a href="/faq" className="hover:text-[#0D48A6]">Hỏi đáp</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-[#0D48A6] mb-4">Danh mục</h3>
            <ul className="text-sm text-[#38383D] space-y-2">
              <li><a href="/electronics" className="hover:text-[#0D48A6]">Điện tử</a></li>
              <li><a href="/fashion" className="hover:text-[#0D48A6]">Thời trang</a></li>
              <li><a href="/home" className="hover:text-[#0D48A6]">Nhà cửa</a></li>
              <li><a href="/beauty" className="hover:text-[#0D48A6]">Làm đẹp</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-[#0D48A6] mb-4">Kết nối với chúng tôi</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1JYScyLo2F/?mibextid=wwXIfr" className="text-[#38383D] hover:text-[#0D48A6]">
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#38383D] hover:text-[#0D48A6]">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#38383D] hover:text-[#0D48A6]">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-[#38383D]">
          <p>© 2025 tuanminh9704. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};