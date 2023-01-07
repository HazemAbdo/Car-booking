import { FC, useState } from "react";
import Notification from "../../assets/Icons/Notification";
import "./Navbar.css";
interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navbar: FC<NavbarProps> = ({ isDarkMode, setIsDarkMode }) => {
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div
      className="navbar"
      style={{
        backgroundColor: isDarkMode ? "#242731" : "white",
      }}
    >
      <div className="navbar-content">
        <div
          className="search-container"
          style={{
            backgroundColor: isDarkMode ? "#1F2128" : "#F5F4F6",
          }}
        >
          <input
            className="search-field"
            type="search"
            placeholder="Search or Type"
            style={{
              color: isDarkMode ? "white" : "black",
            }}
          />
        </div>
        <div className="notification-avatar">
          <Notification />
          <img
            className="avatar"
            src="src\assets\Images\avatar.png"
            alt="avatar"
          />
          <img
            src={
              isDarkMode
                ? `src\\assets\\Images\\whitemode.png `
                : `src\\assets\\Images\\darkmode.png`
            }
            style={{
              width: "48px",
              height: "48px",
            }}
            onClick={toggleDarkMode}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
