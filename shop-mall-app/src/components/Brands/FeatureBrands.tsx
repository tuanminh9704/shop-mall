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
  ];
  return (
    <div className="mb-6">
      <div className="font-medium text-2xl">Thương hiệu nổi bật</div>
      <div className="grid grid-cols-4 gap-4">
        {featureBrands.map((item) => (
          <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <img
              src={item.img}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="mt-2 font-semibold text-sm truncate">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
