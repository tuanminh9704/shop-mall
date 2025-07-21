import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, EffectFade } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const FeatureBrands = () => {
  const featureBrands = [
    {
      img: "https://salt.tikicdn.com/cache/750x750/ts/product/88/71/f4/5a7505b53ec4028d5fe02500142d3118.png.webp",
      title: "Trải nghiệm ultra nhận quà khủng",
    },
    {
      img: "https://salt.tikicdn.com/cache/750x750/ts/product/88/71/f4/5a7505b53ec4028d5fe02500142d3118.png.webp",
      title: "Trải nghiệm ultra nhận quà khủng",
    },
    {
      img: "https://salt.tikicdn.com/cache/750x750/ts/product/88/71/f4/5a7505b53ec4028d5fe02500142d3118.png.webp",
      title: "Trải nghiệm ultra nhận quà khủng",
    },
    {
      img: "https://salt.tikicdn.com/cache/750x750/ts/product/88/71/f4/5a7505b53ec4028d5fe02500142d3118.png.webp",
      title: "Trải nghiệm ultra nhận quà khủng",
    },
    {
      img: "https://salt.tikicdn.com/cache/750x750/ts/product/88/71/f4/5a7505b53ec4028d5fe02500142d3118.png.webp",
      title: "Trải nghiệm ultra nhận quà khủng",
    },
    {
      img: "https://salt.tikicdn.com/cache/750x750/ts/product/88/71/f4/5a7505b53ec4028d5fe02500142d3118.png.webp",
      title: "Trải nghiệm ultra nhận quà khủng",
    },
    {
      img: "https://salt.tikicdn.com/cache/750x750/ts/product/88/71/f4/5a7505b53ec4028d5fe02500142d3118.png.webp",
      title: "Trải nghiệm ultra nhận quà khủng",
    },
  ];
  return (
    <div className="mb-6 w-full">
      <div className="font-medium text-2xl mb-4">Thương hiệu nổi bật</div>
      <Swiper
        modules={[Navigation, A11y, EffectFade]}
        spaceBetween={16}
        slidesPerView={4}
        navigation
        speed={1000}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {featureBrands.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
              <img
                src={item.img}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-2 font-semibold text-sm truncate">
                {item.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
