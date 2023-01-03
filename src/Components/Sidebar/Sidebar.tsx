import "./Sidebar.css";
import Assets from "./Icons/Assets";
import Booking from "./Icons/Booking";
import Buy from "./Icons/Buy";
import Calendar from "./Icons/Calendar";
import Dashboard from "./Icons/Dashboard";
import Logo from "./Icons/Logo";
import Logout from "./Icons/Logout";
import Messages from "./Icons/Messages";
import Sell from "./Icons/Sell";
import Services from "./Icons/Services";
import Settings from "./Icons/Settings";
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
