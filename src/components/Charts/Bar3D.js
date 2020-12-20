import React from "react";

import FusionCharts from "fusioncharts";
import ReactFC from "react-fusioncharts";

import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const chartComponent = ({ data }) => {
  const chartConfigs = {
    type: "bar3D",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Forked",
        yAxisName: "Forks",
        xAxisName: "Repos",
        xAxisNameFontSize: "16px",
        yAxisNameFontSize: "16px",

      },
      data
    }
  };

  return (<ReactFC {...chartConfigs} />);
}

export default chartComponent;