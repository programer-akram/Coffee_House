import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout';
import Home from '../Pages/Home';
import Coffees from '../Pages/Coffees';
import Dashboard from '../Pages/Dashboard';
import CoffeCards from '../Components/CoffeCards';
import CoffeeDetails from '../Pages/CoffeeDetails';


const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
          loader: () => fetch('../categories.json'),
          children: [
            {
            path: '/',
            element: <CoffeCards />,
            loader: () => fetch('../coffees.json')
          },
            {
            path: '/category/:category',
            element: <CoffeCards />,
            loader: () => fetch('../coffees.json')
          },
        ]
        },
        {
          path: '/coffees',
          element: <Coffees />,
          loader: () => fetch('../coffees.json')
        },
        {
          path: '/dashboard',
          element: <Dashboard />
        },
        {
          path: '/coffee/:id',
          element: <CoffeeDetails />,
          loader: () => fetch('../coffees.json')
        },
      ]
    },
  ])

  export default routes;