import React, { FunctionComponent, useContext } from "react";
import "./VerticalBarChart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { DarkThemeContext } from "../../Contexts/DarkThemeContext";
import { getDummyGraphsDataOfRange } from "../../assets/DummyData/DummyData";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const buttons = ["Day", "Week", "Month"];

const VerticalBarChart: FunctionComponent = () => {
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
        borderColor: "white",
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
      className="vertical-bar-container"
      style={{
        backgroundColor: isDarkMode ? "#242731" : "white",
      }}
    >
      <div className="vertical-bar-content">
        <p
          className="vertical-bar-title"
          style={{
            color: isDarkMode ? "white" : "black",
          }}
        >
          <strong>Miles</strong> Statistics
        </p>
        <div className="vertical-bar-buttons-text">
          <div className="vertical-bar-buttons">
            {buttons.map((button, index) => (
              <button
                key={button}
                onClick={() => setDataType(button)}
                className={`${
                  button === dataType ? "active" : ""
                } vertical-bar-button
                `}
              >
                {button}
              </button>
            ))}
          </div>
          <p
            style={{
              color: isDarkMode ? "white" : "black",
              whiteSpace: "nowrap",
              fontWeight: "700",
              fontSize: "14px",
              lineHeight: "18px",
            }}
          >
            256 Miles
          </p>
        </div>

        <Bar data={data} options={options} className="vertical-chart" />
      </div>
    </div>
  );
};

export default VerticalBarChart;
