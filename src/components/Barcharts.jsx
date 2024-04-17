import { useEffect, useState } from "react";
import Barchart1 from "./Barchart1";
import Barchart2 from "./Barchart2";
import Barchart3 from "./Barchart3";
import "chart.js/auto";
import "./Barcharts.css";

export default function Barcharts() {
  const [data, setData] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState("");

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    fetch("http://54.219.159.30:8080/api/recovery")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const groupedByReportingPeriod = data.reduce((accumulator, currentValue) => {
    if (!accumulator[currentValue.reportingPeriod]) {
      accumulator[currentValue.reportingPeriod] = [];
    }
    accumulator[currentValue.reportingPeriod].push(currentValue);
    return accumulator;
  }, {});

  const handleSelectChange = (e) => {
    setSelectedPeriod(e.target.value);
  };

  // New handler to stop event propagation
  const handleSelectClick = (e) => {
    e.stopPropagation();
  };

  const reportingPeriod_2019_20 = groupedByReportingPeriod["2019-20"] || [];
  const reportingPeriod_2020_21 = groupedByReportingPeriod["2020-21"] || [];
  const reportingPeriod_2021_22 = groupedByReportingPeriod["2021-22"] || [];

  // Function to render the appropriate chart based on selectedPeriod
  const renderChart = () => {
    switch (selectedPeriod) {
      case "2019-20":
        return <Barchart1 rawData={reportingPeriod_2019_20} />;
      case "2020-21":
        return <Barchart2 rawData={reportingPeriod_2020_21} />;
      case "2021-22":
        return <Barchart3 rawData={reportingPeriod_2021_22} />;
      default:
        return <div>Select a reporting period to display the chart.</div>;
    }
  };

  return (
    <div
      className={`card-inner ${isFlipped ? "card-flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="card-front"></div>
      <div className="card-back">
        <div className="chart-desc">Energy recovery in Western Australia</div>
        <select
          value={selectedPeriod}
          onClick={handleSelectClick} // Prevents the card flip on select click
          onChange={handleSelectChange} // Handles the selection change
        >
          <option value="">Select Reporting Period</option>
          <option value="2019-20">2019-20</option>
          <option value="2020-21">2020-21</option>
          <option value="2021-22">2021-22</option>
        </select>
        {renderChart()}
      </div>
    </div>
  );
}
