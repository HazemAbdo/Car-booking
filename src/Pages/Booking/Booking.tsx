import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Booking.css";
const Booking = () => {
  return (
    <div className="booking-page">
      <Sidebar />
      <div className="right-part">
        <div className="cars"></div>
        <div className="filters"></div>
        <div className="header"></div>
        <div className="top-bar"></div>
      </div>
    </div>
  );
};

export default Booking;
