import { Container} from './Chart.style.js'

import React from "react";
import Chart from "chart.js/auto";

function MyChart() {
   const chartRef = React.useRef(null);
   const chartInstanceRef = React.useRef(null);

   React.useEffect(() => {
      const myChartRef = chartRef.current.getContext("2d");

      if (chartInstanceRef.current) {
         chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(myChartRef, {
         type: "bar",
         data: {
            labels: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
            datasets: [
               {
                  label: "Incomes",
                  data: [50, 550, 850, 150, 25, 200, 200],
                  backgroundColor: "#41D158",
               },
               {
                  label: "Expenses",
                  data: [500, 150, 700, 150, 715, 950, 500],
                  backgroundColor: "#FB6C6C",
               },
            ],
         },
         options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
               legend: false,
               title: {
                  display: true,
                  
               },
            },
            scales: {
               y: {
                  beginAtZero: true,
               },
            },
         },
      });
   }, []);

   return <canvas ref={chartRef} />;
}





const ChartContainer = ({timeFrameTransaction}) => {
    return (
        <Container>

         <MyChart>{timeFrameTransaction}</MyChart>
            
        </Container>
    );
}

export {ChartContainer};