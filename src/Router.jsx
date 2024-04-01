import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import Corousel from './Components/Corousel'
import Fake from './Components/Fake'
import MainMenClothings from './Components/MainMenClothings'
import MainWomenClothings from './Components/MainWomenClothings'
import MainJewelery from './Components/MainJewelery'
import MainElectonics from './Components/MainElectonics'

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        // { path: 'contactus', element: <ContactUs /> },
        { path: 'mensection', element: <MainMenClothings /> },
        { path: 'womensection', element: <MainWomenClothings /> },
        { path: 'jewelerysection', element: <MainJewelery /> },
        { path: 'electronicsection', element: <MainElectonics /> }
      ]
    },
    { path: 'aboutus', element: <AboutUs /> },
    { path: 'fake', element: <Fake /> }
  ])

  return <RouterProvider router={router} />
}

export default Router
