import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Pages/About.jsx';
import Home from './Pages/Home.jsx';
import Blogs from './Pages/Blogs.jsx';
import Contact from './Pages/Contact.jsx';
import Services from './Pages/Services.jsx';
import Banner from './Component/Banner.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [{
      path: '/',
      element: <Home/>
    },
    {
      path: '/about',
      element: <About/>
    },

    {
      path: '/blogs',
      element: <Blogs/>
    },

    {
      path: '/contact',
      element: <Contact/>
    },

    {
      path: '/services',
      element: <Services/>
    },
     
    
    ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
