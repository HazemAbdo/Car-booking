import React, { FunctionComponent, useContext } from "react";
import "./ContinuousGraph.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { DarkThemeContext } from "../../Contexts/DarkThemeContext";
import { getDummyGraphsDataOfRange } from "../../assets/DummyData/DummyData";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const buttons = ["Day", "Week", "Month"];
const ContinuousGraph: FunctionComponent = () => {
  const { isDarkMode } = useContext(DarkThemeContext);
  const [dataType, setDataType] = React.useState("Day");
  const {
    labels: currentLabel,
    dummyData: currentData,
    backgroundColor: currentBackgroundColor,
    borderColor: currentBorderColor,
  } = getDummyGraphsDataOfRange(dataType);
  const data = {
    labels: currentLabel,
    datasets: [
      {
        data: currentData,
        backgroundColor: currentBackgroundColor,
        borderColor: currentBorderColor,
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      x: {
        ticks: {
          color: isDarkMode ? "white" : "#5F6165",
        },
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div
      className="continuous-graph-container"
      style={{
        backgroundColor: isDarkMode ? "#242731" : "white",
      }}
    >
      <div className="continuous-graph-content">
        <p
          className="continuous-graph-title"
          style={{
            color: isDarkMode ? "white" : "black",
          }}
        >
          <strong>Car</strong> Statistics
        </p>
        <div className="continuous-graph-buttons-text">
          <p
            style={{
              color: isDarkMode ? "white" : "#5F6165",
              whiteSpace: "nowrap",
              fontWeight: "700",
              fontSize: "14px",
              lineHeight: "18px",
            }}
          >
            20 February 2022
          </p>
          <div className="continuous-graph-buttons">
            {buttons.map((button) => (
              <button
                key={button}
                onClick={() => setDataType(button)}
                className={`${
                  button === dataType ? "active-continuos" : ""
                } continuous-graph-button`}
              >
                {button}
              </button>
            ))}
          </div>
        </div>

        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ContinuousGraph;
