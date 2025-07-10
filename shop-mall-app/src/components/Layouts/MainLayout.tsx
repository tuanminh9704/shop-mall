import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import type { FC } from "react";

export const MainLayout : FC =  () =>  {
    return (
        <div className="main-layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}