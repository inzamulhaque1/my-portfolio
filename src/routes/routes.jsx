import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../layout/MainLayout";
import Loading from "../components/Loading";

// Lazy load pages for better performance
const Home = lazy(() => import("../pages/Home/Home"));
const ProjectDetails = lazy(() => import("../pages/Projects/ProjectDetails"));
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
        path: "/project/:projectId",
        element: <LazyComponent><ProjectDetails /></LazyComponent>,
      },
      // Legacy routes redirect to new dynamic routes
      {
        path: "/project1-details",
        element: <LazyComponent><Home /></LazyComponent>,
      },
      {
        path: "/project2-details",
        element: <LazyComponent><Home /></LazyComponent>,
      },
      {
        path: "/project3-details",
        element: <LazyComponent><Home /></LazyComponent>,
      },
    ],
  },
  {
    path: "*",
    element: <LazyComponent><NotFound /></LazyComponent>,
  },
]);
