// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Main from './components/Layouts/Main';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import { ProductsDataLoader } from './components/Loaders/ProductsDataLoader';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          loader: async() => {
            return fetch('products.json')
          },
          element: <Shop></Shop>
        },
        {
          path:'/orders',
          loader: ProductsDataLoader,
          element:<Orders></Orders>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        }
      ]
    },
    {
      path:'/about',
      element:<About></About>
    }
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
