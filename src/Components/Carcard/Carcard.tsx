import Love from "../../assets/Icons/Love";
import Manual from "../../assets/Icons/Manual";
import Passenger from "../../assets/Icons/Passenger";
import "./CarCard.css";
interface CarCardProps {
  carName?: string;
  carType?: string;
  carImage?: string;
  passengerNumber?: number;
  manual?: boolean;
  price?: string;
}

const CarCard: React.FC<CarCardProps> = ({
  carName = "Porshe 718 Cayman S",
  carType = "Coupe",
  carImage = "src\\assets\\Images\\car.png",
  passengerNumber = 4,
  manual = true,
  price = "400$"
}) => {
  return <div className="car-card">
      <div className="card-content">
        <div className="title">
          <div className="name-favorite">
            <p className="car-name">{carName}</p>
            <Love />
          </div>
          <p className="type">{carType}</p>
        </div>
        <img src={carImage} alt="car" className="car-image" />
        <div className="bottom">
          <div className="left">
            <div className="passenger">
              <Passenger />
              <p className="passenger-number">{passengerNumber}</p>
            </div>
            <div className="manual">
              <Manual />
              <p className="manual-text">{manual ? "Manual" : "Automatic"}</p>
            </div>
          </div>
          <p className="price">
            <strong>{price}</strong>/d
          </p>
        </div>
      </div>
    </div>;
};

export default CarCard;