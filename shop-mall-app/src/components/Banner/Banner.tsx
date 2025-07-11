import type { FC } from "react";

export const Banner: FC = () => {
  const banners = [
    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/94/76/f9/700778b88319addc31dd57b4f0daa496.jpg.webp",
    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/62/65/2f/fe1564ce7f7e0480eabef36c893bd26a.png.webp",
  ];
  return (
    <div className="flex gap-3 justify-center mb-6 p-4">
      {banners.map((item: string) => (
        <img
          src={item}
          alt="Banner"
          className="w-140 h-auto object-cover rounded"
        />
      ))}
    </div>
  );
};
