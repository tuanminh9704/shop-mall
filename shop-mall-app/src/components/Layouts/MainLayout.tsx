import { Header } from "./Header";
import { Footer } from "./Footer";
import { SubHeader } from "./SubHeader";
import { Outlet } from "react-router-dom";
import type { FC } from "react";

export const MainLayout : FC =  () =>  {
    return (
        <div className="main-layout">
            <Header />
            <SubHeader />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}