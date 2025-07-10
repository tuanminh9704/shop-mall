import { MainLayout } from '../components/Layouts/MainLayout.tsx';
import { HomePage } from '../pages/HomePage';

export const router = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        
      }
    ],
  },
];