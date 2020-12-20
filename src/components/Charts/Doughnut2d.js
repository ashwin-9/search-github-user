import React from "react";

import FusionCharts from "fusioncharts";
import ReactFC from "react-fusioncharts";

import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const chartComponent = ({ data }) => {
  const chartConfigs = {
    type: "doughnut2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Stars Per Language",
        decimals: 0,
        pieRadius: '45%',
        showPercentValues: 0,
        theme: 'candy'
      },
      data
    }
  };

  return (<ReactFC {...chartConfigs} />);
}

export default chartComponent;