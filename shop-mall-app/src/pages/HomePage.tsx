import type { FC } from "react";
import { SideBar } from "../components/Layouts/SideBar";

export const HomePage : FC = () => {
  return (
    <div className="flex flex-1 min-h-[calc(100vh-200px)] bg-[#F5F5FA] gap-5 p-4">
      <aside className="w-64 shrink-0 border-r border-[#EBEBF0] bg-white">
        <SideBar />
      </aside>

      <div className="flex-1 p-4 bg-white">
        <h1 className="text-xl font-bold mb-4 ml-2.5">Home Page</h1>
      </div>
    </div>
  );
};

export default HomePage;