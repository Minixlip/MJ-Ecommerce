import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';

function App() {
  return (
    <>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: '/',
            element: <Home />,
            errorElement: <div>Error 404 Not Found</div>,
          },
          {
            path: '/shop',
            element: <Shop />,
            errorElement: <div>Error 404 Not Found</div>,
          },
          {
            path: '/about',
            element: <About />,
            errorElement: <div>Error 404 Not Found</div>,
          },
        ])}
      />
    </>
  );
}

export default App;
