import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ErrorPage />,
    children: [
		{
		  path: 'team',
		  element: <ErrorPage />,
		},
	  ],
  },
  {
	path: '/team',
    element: <ErrorPage />,
  },
]);
