import { FunctionComponent } from "react";
import Breakfluid from "../../assets/Icons/Breakfluid";
import Circlepercentage from "../../assets/Icons/Circlepercentage";
import Energy from "../../assets/Icons/Energy";
import Range from "../../assets/Icons/Range";
import Tirewear from "../../assets/Icons/Tirewear";
import "./PercentageCard.css";
interface PercentageProps {
  percentage: number;
  iconName: string;
  cardColor: string;
  textColor: string;
  circleColor: string;
  title: string;
}

const PercentageCard: FunctionComponent<PercentageProps> = ({
  percentage,
  iconName,
  cardColor,
  textColor,
  circleColor,
  title,
}) => {
  const icon =
    iconName === "Energy" ? (
      <Energy />
    ) : iconName === "Range" ? (
      <Range />
    ) : iconName === "Breakfluid" ? (
      <Breakfluid />
    ) : (
      <Tirewear />
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
        <Circlepercentage percentage={percentage} color={circleColor} />
      </div>
    </div>
  );
};

export default PercentageCard;
