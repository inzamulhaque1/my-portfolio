import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Project1Details from "../pages/Projects/project1Details";
import Project2Details from "../pages/Projects/Project2Details";
import Project3Details from "../pages/Projects/Project3Details";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/project1-details",
    element: <Project1Details></Project1Details>,
  },
  {
    path: "/project2-details",
    element: <Project2Details></Project2Details>,
  },
  {
    path: "/project3-details",
    element: <Project3Details></Project3Details>,
  },
]);
