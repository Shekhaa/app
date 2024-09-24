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
// Register necessary components
//let result;

export default function Char() {
  const [mapData, setMapData] = useState([]);
  const [dataSet, setDataSet] = useState([]);

  useEffect(() => {
    async function getData() {
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

    getData();
  }, []);

  let labels = [],
    k = [],
    datasts = [],
    inc = 10,
    dec = 10;

  function incr() {
    // setDataPoints((value) => ++value);
    // datasts.splice(0, dataPoints);
  }
  const decr = () => {
    setDataSet((value) => value.splice(0, 1));
    // datasts = datasts.splice(19, 1);
  };

  if (
    mapData.data &&
    mapData.data.nearby_stores &&
    mapData.data.nearby_stores.stores &&
    !Array.isArray(mapData)
  ) {
    k = mapData.data.nearby_stores.stores;
    labels = k.map((item) => item.location_name);
    labels = labels.splice(0);
    console.log(labels);
    var test = k.map((item) => item.distance);
    setMapData(test);
    //datasts = k.map((item) => item.distance);
    //datasts = datasts.splice(0, 20);
    //console.log(datasts);
  }
  /*
  const data = {
    labels: labels.splice(0, 20),
    datasets: [
      {
        label: "Api Data Fetched for Location distance wise ",
        data: datasts.splice(0, 20),
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true, // Makes the chart responsive
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Nearby Store Distances",
      },
    },
    scales: {
      y: {
        beginAtZero: true, // y-axis starts at 0
      },
    },
  };
*/
  return (
    <>
      {mapData && mapData.length > 0 && (
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
          {" "}
          <Bar
            data={{
              labels: labels,

              datasets: [
                {
                  label: "Api Data Fetched for Location distance wise ",
                  data: mapData,
                  borderColor: "rgba(75, 192, 192, 1)",
                  borderWidth: 1,
                },
              ],
            }}
          />
          <button className="btn btn-outline-success" onClick={incr}>
            INCREASE
          </button>
          <button className="btn btn-outline-success" onClick={decr}>
            DECREASE
          </button>
        </div>
      )}
    </>
  );
}
