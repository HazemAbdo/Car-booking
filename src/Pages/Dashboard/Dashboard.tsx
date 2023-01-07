import { FunctionComponent, useContext } from "react";
import ContinuousGraph from "../../Components/ContinuousGraph/ContinuousGraph";
import Navbar from "../../Components/Navbar/Navbar";
import PercentageCard from "../../Components/PercentageCard/PercentageCard";
import RecommendCard from "../../Components/RecommendCard/RecommendCard";
import Sidebar from "../../Components/Sidebar/Sidebar";
import VerticalBarChart from "../../Components/VerticalBarChart/VerticalBarChart";
import "./Dashboard.css";
import { DarkThemeContext } from "../../Contexts/DarkThemeContext";
import {
  getDummyPercentageCardsData,
  getDummyRecommendCardsData,
} from "../../assets/DummyData/DummyData";
const Dashboard: FunctionComponent = () => {
  const { isDarkMode } = useContext(DarkThemeContext);
  const percentageCardsData = getDummyPercentageCardsData(isDarkMode);
  const recommendCardsData = getDummyRecommendCardsData();
  return (
    <div className="dashboard-page">
      <Sidebar />
      <div
        className="right-part"
        style={{
          backgroundColor: isDarkMode ? "#1F2128" : "#f5f4f6",
        }}
      >
        <Navbar />
        <div className="cards-list">
          {percentageCardsData.map((percentageCardData) => (
            <PercentageCard
              percentage={percentageCardData.percentage}
              cardColor={percentageCardData.cardColor}
              textColor={percentageCardData.textColor}
              circleColor={percentageCardData.circleColor}
              title={percentageCardData.title}
              iconName={percentageCardData.iconName}
              kilometers={percentageCardData.kilometers}
              key={Math.random()}
            />
          ))}
        </div>
        <div className="statistics">
          <VerticalBarChart />
          <ContinuousGraph />
        </div>
        <div className="recommendations">
          {recommendCardsData.map((recommendCardData) => (
            <RecommendCard
              carName={recommendCardData.carName}
              numberKilometers={recommendCardData.numberKilometers}
              pricePerHour={recommendCardData.pricePerHour}
              backgroundColor={recommendCardData.backgroundColor}
              key={Math.random()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
