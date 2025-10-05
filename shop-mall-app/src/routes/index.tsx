import { MainLayout } from "../components/Layouts/MainLayout.tsx";
import { HomePage } from "../pages/HomePage";
import { CategoryPage } from "../pages/CategoryPage.tsx";
import { ProductDetail } from "../pages/ProductDetail.tsx";

export const router = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: ":slug/:categoryId",
        element: <CategoryPage />,
      },
      {
        path: ":slug",
        element: <ProductDetail />,
      }
    ],
  },
];
