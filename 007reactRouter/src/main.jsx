import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import About from './components/About/About';
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Layout from './Layout';
import User from './components/User/User';
import Github, { gitfetcher } from './components/Github/Github';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "About",
//         element: <About />
//       },
//       {
//         path: "Contact",
//         element: <Contact />
//       }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='About' element={<About />}/>
      <Route path='Contact' element={<Contact />}/>
      <Route path='User/:userid' element={<User />}/>
      <Route
        loader={gitfetcher}
        path='Github' 
        element={<Github />}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
