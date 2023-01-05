import "./Sidebar.css";
import Assets from "../../assets/Icons/Assets";
import Booking from "../../assets/Icons/Booking";
import Buy from "../../assets/Icons/Buy";
import Calendar from "../../assets/Icons/Calendar";
import Dashboard from "../../assets/Icons/Dashboard";
import Logo from "../../assets/Icons/Logo";
import Logout from "../../assets/Icons/Logout";
import Messages from "../../assets/Icons/Messages";
import Sell from "../../assets/Icons/Sell";
import Services from "../../assets/Icons/Services";
import Settings from "../../assets/Icons/Settings";
const contentIcons = [
  {
    icon: <Dashboard />,
    text: "Dashboard",
  },
  {
    icon: <Assets />,
    text: "Assets",
  },
  {
    icon: <Booking />,
    text: "Booking",
  },
  {
    icon: <Sell />,
    text: "Sell Cars",
  },
  {
    icon: <Buy />,
    text: "Buy Cars",
  },
  {
    icon: <Services />,
    text: "Services",
  },
  {
    icon: <Calendar />,
    text: "Calendar",
  },
  {
    icon: <Messages />,
    text: "Messages",
  },
];
const bottomIcons = [
  {
    icon: <Settings />,
    text: "Settings",
  },
  {
    icon: <Logout />,
    text: "Logout",
  },
];
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-content-top">
          <div className="logo">
            <Logo />
            <div className="text">Motiv.</div>
          </div>
          <div className="contents">
            {contentIcons.map((content) => (
              <div className={`content ${content.text}`} key={content.text}>
                {content.icon}
                <div className="text">{content.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="sidebar-content-bottom">
          {bottomIcons.map((content) => (
            <div className={`content ${content.text}`} key={content.text}>
              {content.icon}
              <div className="text">{content.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
