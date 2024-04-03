import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import AboutUs from './Components/AboutUs'

import ShoppingLists from './Components/ShoppingLists'

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        // { path: 'contactus', element: <ContactUs /> },
      ]
    },
    { path: 'aboutus', element: <AboutUs /> },
    { path: 'shopLists', element: <ShoppingLists /> }
  ])

  return <RouterProvider router={router} />
}

export default Router
