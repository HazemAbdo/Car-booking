import { FunctionComponent } from "react";
import BreakFluid from "../../assets/Icons/BreakFluid";
import CirclePercentage from "../../assets/Icons/CirclePercentage";
import Energy from "../../assets/Icons/Energy";
import Range from "../../assets/Icons/Range";
import TireWear from "../../assets/Icons/TireWear";
import "./PercentageCard.css";
interface PercentageProps {
  percentage: number;
  iconName: string;
  cardColor: string;
  textColor: string;
  circleColor: string;
  title: string;
  kilometers?: number;
}

const PercentageCard: FunctionComponent<PercentageProps> = ({
  percentage,
  iconName,
  cardColor,
  textColor,
  circleColor,
  title,
  kilometers,
}) => {
  const icon =
    iconName === "Energy" ? (
      <Energy />
    ) : iconName === "Range" ? (
      <Range />
    ) : iconName === "BreakFluid" ? (
      <BreakFluid />
    ) : (
      <TireWear />
    );
  return (
    <div
      className="percentage-card"
      style={{
        backgroundColor: cardColor,
      }}
    >
      <div className="percentage-card-top">
        <div className="percentage-card-icon">{icon}</div>
        <div className="percentage-card-title">
          <p
            className=""
            style={{
              color: textColor,
            }}
          >
            {title}
          </p>
        </div>
      </div>
      <div className="circle-percentage">
        <CirclePercentage
          percentage={percentage}
          color={circleColor}
          kilometers={kilometers}
        />
      </div>
    </div>
  );
};

export default PercentageCard;
