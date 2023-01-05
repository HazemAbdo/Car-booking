import Booking from "./Pages/Booking/Booking";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
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

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
