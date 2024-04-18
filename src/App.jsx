import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';

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
        ])}
      />
    </>
  );
}

export default App;
