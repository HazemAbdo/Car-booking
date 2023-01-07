import { useContext } from "react";
import { getDummyCarsData } from "../../assets/DummyData/DummyData";
import Filter from "../../assets/Icons/Filter";
import Grid from "../../assets/Icons/Grid";
import CarCard from "../../Components/CarCard/CarCard";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { DarkThemeContext } from "../../Contexts/DarkThemeContext";
import "./Booking.css";
const Booking: React.FC = () => {
  const cars = getDummyCarsData();
  const { isDarkMode } = useContext(DarkThemeContext);
  const numberRows = Math.ceil(cars.length / 4);
  return (
    <div className="booking-page">
      <Sidebar />
      <div
        className="right-part"
        style={{
          backgroundColor: isDarkMode ? " #1F2128" : "#f5f4f6",
        }}
      >
        <Navbar />
        <p
          className="header"
          style={{
            color: isDarkMode ? "white" : "black",
          }}
        >
          Booking
        </p>
        <div className="filters">
          <div className="filters-left">
            <select
              name="state"
              id="state"
              style={{
                backgroundColor: isDarkMode ? "#242731" : "#FFFFFF",
                color: isDarkMode ? "white" : "black",
              }}
            >
              <option value="">New</option>
              <option value="">Old</option>
            </select>
            <select
              name="brand"
              id="brand"
              style={{
                backgroundColor: isDarkMode ? "#242731" : "#FFFFFF",
                color: isDarkMode ? "white" : "black",
              }}
            >
              <option value="">Porshe</option>
              <option value="">BMW</option>
            </select>
          </div>
          <div className="filters-right">
            <Grid />
            <Filter />
          </div>
        </div>
        <div
          className="cars"
          style={{
            gridTemplateRows: `repeat(${numberRows}, 1fr)`,
          }}
        >
          {cars.map((car) => (
            <CarCard
              carName={car.carName}
              carType={car.carType}
              carImage={car.carImage}
              passengerNumber={car.passengerNumber}
              manual={car.manual}
              price={car.price}
              key={Math.random()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Booking;
