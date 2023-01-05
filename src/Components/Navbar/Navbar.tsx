import Notification from "../../assets/Icons/Notification";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="search-container">
          <input
            className="search-field"
            type="search"
            placeholder="Search or Type"
          />
        </div>
        <div className="notification-avatar">
          <Notification />
          <img
            className="avatar"
            src="src\assets\Images\avatar.png"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
