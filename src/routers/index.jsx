import { createBrowserRouter } from 'react-router-dom';
import Projects from '../pages/Projects';
import Members from '../pages/Members'
import News from '../pages/News'

export const router = createBrowserRouter([
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/members',
    element: <Members />,
  },
  {
    path: '/news',
    element: <News />,
  },
]);
