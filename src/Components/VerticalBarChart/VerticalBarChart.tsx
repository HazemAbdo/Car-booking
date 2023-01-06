import React, { FunctionComponent } from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
  },
};
const dayLabels = ["1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM"];
const dayDummyData = [5, 6, 7, 3, 4, 5, 6];
const weekLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weekDummyData = [15, 10, 30, 20, 25, 30, 35];
const monthsLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const dummyMonthData = [50, 60, 70, 80, 90, 100, 110];
const buttons = ["Day", "Week", "Month"];
const VerticalBarChart: FunctionComponent = () => {
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
  return (
    <div className="vertical-bar-container">
      <div className="vertical-bar-content">
        <p className="vertical-bar-title">
          <strong>Miles</strong> Statistics
        </p>
        <div className="vertical-bar-buttons-text">
          <div className="vertical-bar-buttons">
            {buttons.map((button) => (
              <button
                key={button}
                onClick={() => setDataType(button)}
                className={`${
                  button === dataType ? "active" : ""
                } vertical-bar-button`}
              >
                {button}
              </button>
            ))}
          </div>
          <p
            style={{
              color: "#5F6165",
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
