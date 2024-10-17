import { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js";
import "chartjs-chart-financial";
import "chartjs-adapter-date-fns";

Chart.register(...registerables);

const BinanceChart = () => {
  const chartRef = useRef(null); // Reference to canvas element
  const [chartInstance, setChartInstance] = useState(null); // Store chart instance
  const [currentSymbol, setCurrentSymbol] = useState("BTCUSDT"); // Default trading pair
  const [timeFrame, setTimeFrame] = useState("1d"); // Default time frame

  // Load available trading pairs on component mount
  useEffect(() => {
    const loadTradingPairs = async () => {
      try {
        const response = await fetch(
          "https://fapi.binance.com/fapi/v1/exchangeInfo"
        );
        const data = await response.json();
        const selectElement = document.getElementById("symbolSelect");

        data.symbols.forEach((symbol) => {
          if (symbol.contractType === "PERPETUAL") {
            const option = document.createElement("option");
            option.value = symbol.symbol;
            option.text = symbol.symbol;
            selectElement.appendChild(option);
          }
        });
      } catch (error) {
        console.error("Error loading trading pairs:", error);
      }
    };

    loadTradingPairs();
    fetchData(currentSymbol, timeFrame); // Load default data
  }, []); // Only run on mount

  // Fetch candlestick data
  const fetchData = async (symbol, interval) => {
    try {
      const response = await fetch(
        `https://fapi.binance.com/fapi/v1/klines?symbol=${symbol}&interval=${interval}`
      );
      const data = await response.json();
      const formattedData = formatChartData(data);
      updateChart(formattedData);
    } catch (error) {
      console.error("Error fetching chart data:", error);
    }
  };

  // Format the data for Chart.js
  const formatChartData = (data) =>
    data.map((item) => ({
      time: new Date(item[0]),
      open: parseFloat(item[1]),
      high: parseFloat(item[2]),
      low: parseFloat(item[3]),
      close: parseFloat(item[4]),
    }));

  // Update the chart with new data
  const updateChart = (chartData) => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance) {
      chartInstance.destroy(); // Destroy previous instance if exists
    }

    const newChart = new Chart(ctx, {
      type: "candlestick",
      data: {
        datasets: [
          {
            label: currentSymbol,
            data: chartData,
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: "time",
            time: {
              unit: "minute",
            },
          },
        },
      },
    });

    setChartInstance(newChart); // Save the new chart instance
  };

  // Handle symbol change
  const handleSymbolChange = (event) => {
    const newSymbol = event.target.value;
    setCurrentSymbol(newSymbol);
    fetchData(newSymbol, timeFrame); // Fetch new data for the selected symbol
  };

  // Handle time frame change
  const handleTimeFrameChange = (interval) => {
    setTimeFrame(interval);
    fetchData(currentSymbol, interval); // Fetch data with the new interval
  };

  return (
    <div>
      <h1>Binance Futures Chart</h1>

      <div>
        <label htmlFor="symbolSelect">Select Trading Pair: </label>
        <select id="symbolSelect" onChange={handleSymbolChange}></select>
      </div>

      <div>
        {[
          "1m",
          "3m",
          "5m",
          "15m",
          "30m",
          "1h",
          "2h",
          "4h",
          "8h",
          "12h",
          "1d",
          "2d",
          "1w",
          "1M",
        ].map((interval) => (
          <button
            key={interval}
            onClick={() => handleTimeFrameChange(interval)}
          >
            {interval}
          </button>
        ))}
      </div>

      <canvas ref={chartRef} width="800" height="400"></canvas>
    </div>
  );
};

export default BinanceChart;
