import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./ui/AppLayout"
import Home from "./ui/Home"
import Menu, { menuLoader } from '../src/Components/Menu/Menu'
import Error from './ui/Error'
import Cart from "./Components/Cart/Cart"
import CreateOrder, { orderAction } from './Components/Order/CreateOrder'
import Order, { orderLoader } from './Components/Order/Order'
import Loader from "./ui/Loader"

//1.
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />, 
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <Error />
      }, 

      {
        path: '/menu',
        element: <Menu />,
        errorElement: <Error />,//useRouteError()
        loader: menuLoader, //useLoaderData()
        hydrateFallbackElement: <Loader /> 
      },

      {
        path: '/cart',
        element: <Cart />,
        errorElement: <Error />
      },

      {
        path: '/order',
        element: <CreateOrder />,
        errorElement: <Error />,
        action: orderAction //Form Action
      }, 

      {
        path: '/order/:orderID',
        element: <Order />,
        errorElement: <Error />,
        loader: orderLoader,
        hydrateFallbackElement: <Loader />
      }
    ]
  }
])

//2.
export default function App() {
  return <RouterProvider router={router}/>
}
