import React, { useEffect } from "react";
import { Doughnut, Chart } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

function DoughnutChart() {
  useEffect(() => {
    Chart.pluginService.register({
      beforeDraw: function (chart) {
        if (chart.config.options.elements.center) {
          var ctx = chart.chart.ctx;
          var centerConfig = chart.config.options.elements.center;
          var fontStyle = centerConfig.fontStyle || "Arial";
          var txt = centerConfig.text;
          var color = centerConfig.color || "#000";
          var maxFontSize = centerConfig.maxFontSize || 20;
          var sidePadding = centerConfig.sidePadding || 20;
          var sidePaddingCalculated =
            (sidePadding / 100) * (chart.innerRadius * 2);
          ctx.font = "30px " + fontStyle;
          var stringWidth = ctx.measureText(txt).width;
          var elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;
          var widthRatio = elementWidth / stringWidth;
          var newFontSize = Math.floor(30 * widthRatio);
          var elementHeight = chart.innerRadius * 2;
          var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
          var minFontSize = centerConfig.minFontSize;
          var wrapText = false;
          if (minFontSize === undefined) {
            minFontSize = 20;
          }
          if (minFontSize && fontSizeToUse < minFontSize) {
            fontSizeToUse = minFontSize;
            wrapText = true;
          }
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
          var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
          ctx.font = fontSizeToUse + "px " + fontStyle;
          ctx.fillStyle = color;
          if (!wrapText) {
            ctx.fillText(txt, centerX, centerY);
            return;
          }
        }
      },
    });
  });

  const options = {
    maintainAspectRatio : false,
    height:250,
    width:250,
    responsive: true,
    layout: {
      padding: 0
    },
    elements: {
      center: {
        text: "96 Jobs",
        color: "orange",
      },
    },
    legend: {
      display: false,
    },
    cutoutPercentage: 65,
    plugins: {
      datalabels: {
        color: "white",
      },
    },
  };
  const data = {
    datasets: [
      {
        borderWidth: 0,
        data: [86, 7, 3],
        backgroundColor: ["#00558e", "#27ae60", "#f5c32e"],
      },
    ],
  };
  return <Doughnut data={data} options={options} />;
}

export default DoughnutChart;
