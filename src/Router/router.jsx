import {createBrowserRouter} from "react-router-dom";

import Home from "../component/Home/Home";
import Welcome from "../component/Welcome/Welcome";
import About from "../component/About/About";
import Services from "../component/Services/Services";
import Resume from "../Resume/Resume";
import Works from "../component/Works/Works";
import Testimonials from "../component/Testimonials/Testimonials";
import Contact from "../component/Contact/Contact";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    },
    {
        path: "/welcome",
        element: <Welcome></Welcome>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/resume",
        element: <Resume></Resume>
      },
      {
        path: "/works",
        element: <Works></Works>
      },
      {
        path: "/testimonials",
        element: <Testimonials></Testimonials>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
  ]);