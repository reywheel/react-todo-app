import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '@/pages/main';
import { DefaultLayout } from '@/app/ui/DefaultLayout';
import { TodoListPage } from '@/pages/todoList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: 'user/:userId/todos',
        element: <TodoListPage />,
      },
    ],
  },
]);

export { router };
