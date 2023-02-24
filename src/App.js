import {
  createBrowserRouter,
  RouterProvider
}
  from 'react-router-dom';

import HomePage from './pages/Home'
import ProductsPage from './pages/Products'
import EditProducts from './pages/EditProducts'
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error'
import './styles/App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/edit', element: <EditProducts /> }
    ],
  },
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
