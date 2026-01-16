import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../layout/MainLayout";
import Loading from "../components/Loading";

// Lazy load pages for better performance
const Home = lazy(() => import("../pages/Home/Home"));
const Project1Details = lazy(() => import("../pages/Projects/Project1Details"));
const Project2Details = lazy(() => import("../pages/Projects/Project2Details"));
const Project3Details = lazy(() => import("../pages/Projects/Project3Details"));
const NotFound = lazy(() => import("../pages/NotFound"));

// Wrapper component for lazy loaded routes
const LazyComponent = ({ children }) => (
  <Suspense fallback={<Loading />}>
    {children}
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <LazyComponent><NotFound /></LazyComponent>,
    children: [
      {
        path: "/",
        element: <LazyComponent><Home /></LazyComponent>,
      },
      {
        path: "/project1-details",
        element: <LazyComponent><Project1Details /></LazyComponent>,
      },
      {
        path: "/project2-details",
        element: <LazyComponent><Project2Details /></LazyComponent>,
      },
      {
        path: "/project3-details",
        element: <LazyComponent><Project3Details /></LazyComponent>,
      },
    ],
  },
  {
    path: "*",
    element: <LazyComponent><NotFound /></LazyComponent>,
  },
]);
