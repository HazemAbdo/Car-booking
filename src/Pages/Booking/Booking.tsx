import Filter from "../../assets/Icons/Filter";
import Grid from "../../assets/Icons/Grid";
import CarCard from "../../Components/CarCard/CarCard";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Booking.css";
const cars = [
  {
    carName: "Porshe 718 Cayman S",
    carType: "Coupe",
    carImage: "src\\assets\\Images\\car1.png",
    passengerNumber: 4,
    manual: true,
    price: "400$",
  },
  {
    carName: "Porshe 718 Cayman S",
    carType: "Coupe",
    carImage: "src\\assets\\Images\\car1.png",
    passengerNumber: 4,
    manual: true,
    price: "400$",
  },
  {
    carName: "Porshe 718 Cayman S",
    carType: "Coupe",
    carImage: "src\\assets\\Images\\car2.png",
    passengerNumber: 4,
    manual: true,
    price: "400$",
  },
  {
    carName: "Porshe 718 Cayman S",
    carType: "Coupe",
    carImage: "src\\assets\\Images\\car3.png",
    passengerNumber: 4,
    manual: true,
    price: "400$",
  },
  {
    carName: "Porshe 718 Cayman S",
    carType: "Coupe",
    carImage: "src\\assets\\Images\\car1.png",
    passengerNumber: 4,
    manual: true,
    price: "400$",
  },
  {
    carName: "Porshe 718 Cayman S",
    carType: "Coupe",
    carImage: "src\\assets\\Images\\car2.png",
    passengerNumber: 4,
    manual: true,
    price: "400$",
  },
  {
    carName: "Porshe 718 Cayman S",
    carType: "Coupe",
    carImage: "src\\assets\\Images\\car3.png",
    passengerNumber: 4,
    manual: true,
    price: "400$",
  },
  {
    carName: "Porshe 718 Cayman S",
    carType: "Coupe",
    carImage: "src\\assets\\Images\\car2.png",
    passengerNumber: 4,
    manual: true,
    price: "400$",
  },
];
interface BookingProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
const Booking: React.FC<BookingProps> = ({ isDarkMode, setIsDarkMode }) => {
  const numberRows = Math.ceil(cars.length / 4);
  return (
    <div className="booking-page">
      <Sidebar isDarkMode={isDarkMode} />
      <div
        className="right-part"
        style={{
          backgroundColor: isDarkMode ? " #1F2128" : "#f5f4f6",
        }}
      >
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
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
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Booking;
