import Booking from "./Pages/Booking/Booking";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { useState } from "react";
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <Booking isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        ),
      },
      {
        path: "/dashboard",
        element: (
          <Dashboard isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        ),
      },
    ],
    {
      basename: "/",
    }
  );

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
