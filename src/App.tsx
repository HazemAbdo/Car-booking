import Booking from "./Pages/Booking/Booking";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { useState } from "react";
import { DarkThemeContextProvider } from "./Contexts/DarkThemeContext";
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = createBrowserRouter(
    [
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
    {
      basename: "/",
    }
  );

  return (
    <DarkThemeContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </DarkThemeContextProvider>
  );
};

export default App;
