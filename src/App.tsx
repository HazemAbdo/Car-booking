import { useState } from "react";
import "./App.css";
import Booking from "./Pages/Booking/Booking";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Booking />,
      },
    ],
    {
      basename: "/",
    }
  );

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
