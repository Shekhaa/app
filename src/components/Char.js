import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
//import { Button } from "bootstrap";

// Register the required components for the chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Char() {
  const [mapData, setMapData] = useState([]);
  const [numBars, setNumBars] = useState(5);
  const [getDataCounter, setGetDataCounter] = useState(1);

  useEffect(() => {
    async function fetchApiData() {
      const url = "https://target1.p.rapidapi.com/stores/v2/list?place=10009";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "6eb69c2aa1mshddf27456becc191p108768jsn5185fd3a034a",
          "x-rapidapi-host": "target1.p.rapidapi.com",
        },
      };
      const response = await fetch(url, options);
      const data = await response.json();
      setMapData(data);
      console.log(data);
    }

    fetchApiData();
  }, [getDataCounter]);

  function increase() {
    setNumBars(numBars + 1);
  }
  function decrease() {
    setNumBars(numBars - 1);
  }
  function getdatafromApi() {
    setGetDataCounter(getDataCounter + 1);
    console.log(getDataCounter, "API called");
  }

  let labels = [],
    distances = [];

  if (
    mapData.data &&
    mapData.data.nearby_stores &&
    mapData.data.nearby_stores.stores
  ) {
    const stores = mapData.data.nearby_stores.stores;
    labels = stores.map((item) => item.location_name);
    distances = stores.map((item) => item.distance);

    labels = labels.slice(0, numBars);
    distances = distances.slice(0, numBars);
  }

  return (
    <>
      <div
        style={{
          width: "80%",
          height: "400px",
          margin: "0 auto",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          boxShadow: "4px 4px 15px rgba(15, 15, 15, 0.1)",
        }}
      >
        <Bar
          data={{
            labels: labels,
            datasets: [
              {
                label: "Distance from Location",
                data: distances,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          }}
        />

        <button className="btn btn-outline-success" onClick={getdatafromApi}>
          Call API
        </button>
        <button className="btn btn-outline-success" onClick={increase}>
          Increase
        </button>
        <button className="btn btn-outline-success" onClick={decrease}>
          Decrease
        </button>
        {/* Bar filter */}
      </div>
    </>
  );
}
