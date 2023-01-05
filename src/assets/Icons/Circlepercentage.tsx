import { FunctionComponent } from "react";

interface CirclepercentageProps {
  percentage: number;
  color: string;
}

const Circlepercentage: FunctionComponent<CirclepercentageProps> = ({
  percentage,
  color,
}) => {
  return (
    <svg
      viewBox="0 0 36 36"
      style={{
        height: "112px",
        width: "112px",
      }}
    >
      <path
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke={color}
        stroke-width="3"
        stroke-dasharray={`${percentage} ,100`}
      />
      <path
        transform={`rotate(${percentage * 3.6} 18 18)`}
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke="#E5E5E5"
        stroke-width="3"
        stroke-dasharray={`${100 - percentage} ,100`}
      />
      <text x="18" y="20.35" text-anchor="middle" fill={color} font-size="8">
        {percentage}%
      </text>
    </svg>
  );
};

export default Circlepercentage;
