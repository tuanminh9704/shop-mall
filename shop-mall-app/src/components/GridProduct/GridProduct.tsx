const products = [
  {
    name: "Chảo chống dính Inox đáy từ nguyên khối đáy liên Elmich Trimax Classic EL-2702OL size 24cm",
    price: 40000,
    image:
      "https://salt.tikicdn.com/cache/750x750/ts/product/e1/29/21/452477e30a8dcf24b7f1e742403a62c3.jpg.webp",
  },
  {
    name: "Lô 4 cuộn túi rác tiện dụng Inochi - Soji : 25 Lít (54 x 70cm)",
    price: 34000,
    image:
      "https://salt.tikicdn.com/cache/750x750/ts/product/e8/0e/b4/97bfe8ff2a1b5d9a296c38e5cfc4e9d5.jpg.webp",
  },
  {
    name: "Bộ nồi Inox dập nguyên khối Elmich Trimax Classic EL-2110OL Size 18, 20, 24, chảo 26cm",
    price: 2000000,
    image:
      "https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/f7/83/26/63c82f21261db908c65d8e0dad707da1.png.webp",
  },
  {
    name: "Ấm đun nước Inox 304 Elmich 3L EL3373 dùng bếp từ",
    price: 500000,
    image:
      "https://salt.tikicdn.com/cache/750x750/ts/product/17/54/88/5f9103ba3301957221a1d44e2c1bab70.jpg.webp",
  },
  {
    name: "Chảo chống dính Inox đáy từ nguyên khối đáy liên Elmich Trimax Classic EL-2702OL size 24cm",
    price: 40000,
    image:
      "https://salt.tikicdn.com/cache/750x750/ts/product/e1/29/21/452477e30a8dcf24b7f1e742403a62c3.jpg.webp",
  },
  {
    name: "Lô 4 cuộn túi rác tiện dụng Inochi - Soji : 25 Lít (54 x 70cm)",
    price: 34000,
    image:
      "https://salt.tikicdn.com/cache/750x750/ts/product/e8/0e/b4/97bfe8ff2a1b5d9a296c38e5cfc4e9d5.jpg.webp",
  },
  {
    name: "Bộ nồi Inox dập nguyên khối Elmich Trimax Classic EL-2110OL Size 18, 20, 24, chảo 26cm",
    price: 2000000,
    image:
      "https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/f7/83/26/63c82f21261db908c65d8e0dad707da1.png.webp",
  },
  {
    name: "Ấm đun nước Inox 304 Elmich 3L EL3373 dùng bếp từ",
    price: 500000,
    image:
      "https://salt.tikicdn.com/cache/750x750/ts/product/17/54/88/5f9103ba3301957221a1d44e2c1bab70.jpg.webp",
  },
];

export const GridProduct = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <div className="bg-[#FFFFFF]">
          <a href="">
            <div className="w-full h-55 overflow-hidden rounded-md">
              <img
                className="w-full h-full object-cover"
                src={product.image}
                alt="Product Image"
              />
            </div>
            <div className="p-3">
              <div className="text-[#FF4C57] text-[18px] font-medium">
                {product.price}đ
              </div>
              <h3>{product.name}</h3>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};
