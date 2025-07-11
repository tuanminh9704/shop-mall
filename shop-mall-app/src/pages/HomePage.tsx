import type { FC } from "react";
import { SideBar } from "../components/Layouts/SideBar";
import { Banner } from "../components/Banner/Banner";
import { FeaturedProducts } from "../components/Products/FeatureProducts";
import { FeatureBrands } from "../components/Brands/FeatureBrands";

export const HomePage: FC = () => {
  return (
    <div className="flex flex-1 min-h-[calc(100vh-200px)] bg-[#F5F5FA] gap-5 p-4">
      <aside className="w-64 shrink-0 h-screen sticky top-0 border-r border-[#EBEBF0] bg-white overflow-y-auto overflow-x-hidden hover:overflow-y-scroll scrollbar-thin">
        <SideBar />
      </aside>

      <div className="flex-1 h-screen overflow-y-auto p-4 bg-white">
        <Banner />
        <FeaturedProducts />
        <FeatureBrands />
      </div>
    </div>
  );
};

export default HomePage;
