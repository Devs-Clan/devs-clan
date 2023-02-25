import { createBrowserRouter } from 'react-router-dom';
import Projects from '../pages/Projects';

export const router = createBrowserRouter([
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/members',
    element: <Projects />,
  },
  {
    path: '/news',
    element: <Projects />,
  },
]);
