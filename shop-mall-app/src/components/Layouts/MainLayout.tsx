import { Header } from "./Header";
import { Footer } from "./Footer";
import { SubHeader } from "./SubHeader";
import { Outlet } from "react-router-dom";
import type { FC } from "react";

export const MainLayout: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SubHeader />
      <div className="flex flex-1 mt-2.5">
        <main className="flex-1 bg-[#F5F5FA] p-4">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

