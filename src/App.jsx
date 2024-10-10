import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy } from "react";

const Layout = lazy(() => import("/src/Components/Layout.jsx"))

import Home from "./Components/Pages/Home";

import "./App.css";
import Loader from './Components/Loader';


function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    }
  ])
  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={routes} />
      </Suspense>
    </>
  );
}

export default App;
