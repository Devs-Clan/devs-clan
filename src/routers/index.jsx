import { createBrowserRouter } from 'react-router-dom';
import Projects from '../pages/Projects';

export const router = createBrowserRouter([
  {
    path: '/projects',
    element: <Projects />,
  },
]);
