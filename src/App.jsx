import routes from './Routes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './AppLayout';

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <RouterProvider router={router}>
      <AppLayout />
    </RouterProvider>
  );
};

export default App;