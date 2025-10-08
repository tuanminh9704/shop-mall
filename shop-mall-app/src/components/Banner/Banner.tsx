import type { FC } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";


export const Banner: FC = () => {
  const banners = [
    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/94/76/f9/700778b88319addc31dd57b4f0daa496.jpg.webp",
    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/62/65/2f/fe1564ce7f7e0480eabef36c893bd26a.png.webp",
    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/94/76/f9/700778b88319addc31dd57b4f0daa496.jpg.webp",
    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/62/65/2f/fe1564ce7f7e0480eabef36c893bd26a.png.webp",
    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/94/76/f9/700778b88319addc31dd57b4f0daa496.jpg.webp",
    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/62/65/2f/fe1564ce7f7e0480eabef36c893bd26a.png.webp",
  ];
  return (
    <div className="flex gap-3 justify-center mb-6 p-4">
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
        spaceBetween={16}
        slidesPerView={2}
        autoplay={
          {
            delay: 2000,
            disableOnInteraction: false
          }
        }
        speed={800}
        // navigation
        pagination={{ clickable: true }}
      >
        {banners.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item}
              alt="Banner"
              className="w-full h-auto object-cover rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
