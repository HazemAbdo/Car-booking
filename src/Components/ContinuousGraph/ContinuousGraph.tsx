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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const dayLabels = ["1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM"];
const dayDummyData = [5, 6, 7, 3, 4, 5, 6];
const weekLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weekDummyData = [15, 10, 30, 20, 25, 30, 35];
const monthsLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const dummyMonthData = [50, 60, 150, 80, 40, 100, 110];
const buttons = ["Day", "Week", "Month"];
const ContinuousGraph: FunctionComponent = () => {
  const { isDarkMode } = useContext(DarkThemeContext);
  const [dataType, setDataType] = React.useState("Day");
  const currentLabel =
    dataType === "Day"
      ? dayLabels
      : dataType === "Week"
      ? weekLabels
      : monthsLabels;
  const currentData =
    dataType === "Day"
      ? dayDummyData
      : dataType === "Week"
      ? weekDummyData
      : dummyMonthData;
  const currentBackgroundColor =
    dataType === "Day"
      ? "rgba(255, 99, 132, 0.2)"
      : dataType === "Week"
      ? "rgba(54, 162, 235, 0.2)"
      : "rgba(255, 206, 86, 0.2)";
  const currentBorderColor =
    dataType === "Day"
      ? "rgba(255, 99, 132, 1)"
      : dataType === "Week"
      ? "rgba(54, 162, 235, 1)"
      : "rgba(255, 206, 86, 1)";

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
