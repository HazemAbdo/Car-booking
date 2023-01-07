import { FunctionComponent } from "react";
import ContinuousGraph from "../../Components/ContinuousGraph/ContinuousGraph";
import Navbar from "../../Components/Navbar/Navbar";
import PercentageCard from "../../Components/PercentageCard/PercentageCard";
import RecommendCard from "../../Components/RecommendCard/RecommendCard";
import Sidebar from "../../Components/Sidebar/Sidebar";
import VerticalBarChart from "../../Components/VerticalBarChart/VerticalBarChart";
import "./Dashboard.css";
const Dashboard: FunctionComponent = () => {
  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="right-part">
        <Navbar />
        <div className="cards-list">
          <PercentageCard
            percentage={45}
            cardColor="#A162F7"
            textColor="#FFFFFF"
            circleColor="#FFFFFF"
            title="Energy"
            iconName="Energy"
          />
          <PercentageCard
            percentage={60}
            cardColor="#FFFFFF"
            textColor="#000000"
            circleColor="#FF7E86"
            title="Range"
            iconName="Range"
            kilometers={156}
          />
          <PercentageCard
            percentage={9}
            cardColor="#FFFFFF"
            textColor="#000000"
            circleColor="#A162F7"
            title="Break Fluid"
            iconName="BreakFluid"
          />
          <PercentageCard
            percentage={25}
            cardColor="#FFFFFF"
            textColor="#000000"
            circleColor="#F6CC0D"
            title="Tier Water"
            iconName="Tierwater"
          />
        </div>
        <div className="statistics">
          <VerticalBarChart />
          <ContinuousGraph />
        </div>
        <div className="recommendations">
          <RecommendCard
            carName="BMW 3 Series"
            numberKilometers={156}
            pricePerHour="20"
          />
          <RecommendCard
            carName="BMW 3 Series"
            numberKilometers={200}
            pricePerHour="20"
            backgroundColor="#E3ECF1"
          />
          <RecommendCard
            carName="BMW 3 Series"
            numberKilometers={304}
            pricePerHour="20"
            backgroundColor="#F4E3E5"
          />
          <RecommendCard
            carName="BMW 3 Series"
            numberKilometers={500}
            pricePerHour="20"
            backgroundColor="#E1DFA4"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
