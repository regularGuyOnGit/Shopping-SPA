import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import AboutUs from './Components/AboutUs'

import ShoppingLists from './Components/ShoppingLists'
import ErrorPage from './Components/ErrorPage'

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />
    },
    { path: 'aboutus', element: <AboutUs /> },
    { path: 'shopLists', element: <ShoppingLists /> }
  ])

  return <RouterProvider router={router} />
}

export default Router
