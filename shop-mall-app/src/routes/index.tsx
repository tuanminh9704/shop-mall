import { MainLayout } from "../components/Layouts/MainLayout.tsx";
import { HomePage } from "../pages/HomePage";
import { CategoryPage } from "../pages/CategoryPage.tsx";

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
    ],
  },
];
