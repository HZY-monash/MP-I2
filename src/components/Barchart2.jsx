import { Bar } from "react-chartjs-2";
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

export default function Barchart2({ rawData }) {
  const trucks = 24;
  const img =
    "https://static.vecteezy.com/system/resources/previews/000/420/310/original/vector-truck-icon.jpg";

  const xArray = [];
  for (const obj of rawData) {
    xArray.push(obj.category);
  }

  const yArray = [];
  for (const obj of rawData) {
    yArray.push(Number(obj.energyRecovery));
  }

  console.log(xArray, yArray);

  const data = {
    labels: xArray,
    datasets: [
      {
        label: "Energy Recovery(t)",
        data: yArray,
        backgroundColor: "rgba(164, 255, 152, 0.6)",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="visaul-layout">
      <Bar data={data} options={options} />
      <br></br>
      <h3>
        Trucks carry 1.5e4 tons which is equal to carrying 75 blue whales each
        weighing 200 tons
      </h3>
      <div>
        {Array.from({ length: trucks }).map((_, index) => (
          <img
            key={index}
            src={img}
            alt="Truck"
            style={{ width: "2.4rem", height: "2.4rem" }}
          />
        ))}
      </div>
    </div>
  );
}
