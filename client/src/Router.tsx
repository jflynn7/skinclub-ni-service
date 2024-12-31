import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserListPage } from '@/pages/admin/UserList.page';
import { HomePage } from './pages/Home.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/admin/users',
    element: <UserListPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
