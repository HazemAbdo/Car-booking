import Cycle from "../../assets/Icons/Cycle";
import RecommendIcons from "../../assets/Icons/RecommendIcons";
import "./RecommendCard.css";
interface RecommendCardProps {
  recommendationPercentage?: number;
  carName?: string;
  carImage?: string;
  numberKilometers?: number;
  pricePerHour?: string;
  backgroundColor?: string;
}

const RecommendCard: React.FC<RecommendCardProps> = ({
  recommendationPercentage = 100,
  carName = "Porshe 718 Cayman S",
  carImage = "src\\assets\\Images\\car2.png",
  numberKilometers = 156,
  pricePerHour = "400$",
  backgroundColor = "#e1dfa4",
}) => {
  return (
    <div
      className="recommend-card"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div className="recommend-card-content">
        <div className="recommend-card-header">
          <Cycle />
          <p className="recommendation-percentage">
            {recommendationPercentage}% Recommended
          </p>
        </div>
        <img src={carImage} alt="car" className="recommend-card-car-image" />
        <div className="recommend-card-bottom">
          <p className="recommend-card-name">{carName}</p>
          <div className="recommend-card-icons-price">
            <div className="recommend-card-icons">
              <RecommendIcons numberKilometers={numberKilometers} />
            </div>
            <p className="recommend-card-price">{pricePerHour}/h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
