import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Jobs, { jobsLoader } from './pages/Jobs'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'
import ContactLayout from './layout/ContactLayout'
import JobLayOut from './layout/JobLayOut'

import NotFound from './components/NotFound'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
            <Route index element={<Home/>} />
            <Route path='products' element={<Products />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<ContactLayout />} >

              <Route  path='info' element={<ContactInfo />} />
              <Route  path='form' element={<ContactForm />} />
            </Route>

            <Route path='jobs' element={<JobLayOut />}>
                <Route index element={<Jobs />}
                  loader={jobsLoader}
              />
            </Route>
            <Route path='*' element={<NotFound />} />
            
      </Route>
    )
  )


  return (
    <RouterProvider router={router} />
  )
}

export default App