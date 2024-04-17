import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import "./Piechart.css";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

export default function Piechart() {
  const [rawData, setRawData] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    fetch("http://54.219.159.30:8080/api/foodwaste")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((rawData) => {
        setRawData(rawData);
        console.log(rawData);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const xArray = [];
  for (const obj of rawData) {
    if (Number(obj.quantity) != 0) {
      xArray.push(obj.destination);
    }
  }

  const yArray = [];
  for (const obj of rawData) {
    if (Number(obj.quantity) != 0) {
      yArray.push(Number(obj.quantity));
    }
  }

  const data = {
    labels: xArray,
    datasets: [
      {
        label: "Quantity",
        data: yArray,
        backgroundColor: [
          "rgba(164, 255, 152, 0.6)", // Light green
          "rgba(255, 99, 132, 0.6)", // Pink
          "rgba(54, 162, 235, 0.6)", // Blue
          "rgba(255, 206, 86, 0.6)", // Yellow
          "rgba(75, 192, 192, 0.6)", // Teal
          "rgba(153, 102, 255, 0.6)", // Purple
          "rgba(255, 159, 64, 0.6)", // Orange
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {},
  };
  return (
    <div
      className={`pie-card-inner ${isFlipped ? "pie-card-flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="pie-card-front"></div>
      <div className="pie-card-back">
        <div className="pie-chart-desc">Food Waste in Western Australia</div>
        <Pie data={data} options={options} className="pie-chart" />
      </div>
    </div>
  );
}
