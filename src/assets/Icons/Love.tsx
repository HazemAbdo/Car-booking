import { useState } from "react";
const Love = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: "pointer", fill: isFavorite ? "red" : "none" }}
      onClick={() => setIsFavorite(!isFavorite)}
    >
      <path
        d="M17.8164 2.1838L17.8164 2.18386C19.7279 4.095 19.7279 7.20702 17.816 9.11817L17.8159 9.11827L9.99973 16.9345L2.18359 9.11833C0.27226 7.20662 0.272051 4.09447 2.18348 2.18342C4.09512 0.272164 7.20731 0.272239 9.11844 2.18337C9.22469 2.28962 9.32568 2.4004 9.42202 2.51698L9.99923 3.21548L10.5775 2.5179C10.6749 2.40047 10.7762 2.28906 10.8814 2.18386C12.793 0.272599 15.9052 0.272674 17.8164 2.1838Z"
        stroke="#A4A5A6"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default Love;
