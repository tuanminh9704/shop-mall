import type { FC } from "react";
import { SideBar } from "../components/Layouts/SideBar";
import { Banner } from "../components/Banner/Banner";
import { FeaturedProducts } from "../components/Products/FeatureProducts";
import { FeatureBrands } from "../components/Brands/FeatureBrands";

export const HomePage: FC = () => {
  return (
    <div className="flex justify-center min-h-screen w-full bg-[#F5F5FA] p-4">
      {/* wrapper giới hạn tổng width */}
      <div className="flex w-full max-w-[1400px] gap-5">
        <aside className="w-64 shrink-0 sticky top-0 border-r border-[#EBEBF0] bg-white overflow-y-auto scrollbar-thin max-h-screen">
          <SideBar />
        </aside>

        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 bg-white">
          <div className="mx-auto w-full max-w-[1400px] space-y-6">
            <Banner />
            <FeaturedProducts />
            <FeatureBrands />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
