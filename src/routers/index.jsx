import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Projects, Settings, Members, News } from '../pages/';
import { Footer, NavBar } from '../components';



const AppStructure = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'space-between',
    }}
  >
    <NavBar />
    <Outlet />
    <Footer />
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppStructure />,
    children: [
      {
        path: 'settings',
        element: <Settings />
      },
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
