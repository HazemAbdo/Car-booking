import Booking from "./Pages/Booking/Booking";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { DarkThemeContextProvider } from "./Contexts/DarkThemeContext";
const App = () => {
  return (
    <DarkThemeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </DarkThemeContextProvider>
  );
};

export default App;
