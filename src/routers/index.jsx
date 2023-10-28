import { createBrowserRouter, Outlet } from 'react-router-dom';
import Projects from '../pages/Projects';
import Members from '../pages/Members';
import News from '../pages/News';
import { Footer, NavBar } from '../components';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <NavBar />
        <Outlet />
        <Footer/>
      </>
    ),
    children: [
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'members',
        element: <Members />,
      },
      {
        path: 'news',
        element: <News />,
      },
    ],
  },
]);
