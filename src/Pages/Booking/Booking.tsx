import Filter from "../../assets/Icons/Filter";
import Grid from "../../assets/Icons/Grid";
import Carcard from "../../Components/Carcard/Carcard";
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

const Booking: React.FC = () => {
  const numberRows = Math.ceil(cars.length / 4);
  return (
    <div className="booking-page">
      <Sidebar />
      <div className="right-part">
        <Navbar />
        <p className="header">Booking</p>
        <div className="filters">
          <div className="filters-left">
            <select name="state" id="state">
              <option value="">New</option>
              <option value="">Old</option>
            </select>
            <select name="brand" id="brand">
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
            <Carcard
              carName={car.carName}
              carType={car.carType}
              carImage={car.carImage}
              passengerNumber={car.passengerNumber}
              manual={car.manual}
              price={car.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Booking;
