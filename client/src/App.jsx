import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';

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
            path: '/Shop',
            element: <Shop />,
            errorElement: <div>Error 404 Not Found</div>,
          },
        ])}
      />
    </>
  );
}

export default App;
