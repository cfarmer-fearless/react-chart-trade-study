import { StatusSummary } from "../api/status";

export function buildBarChartConfig(data: unknown[]): unknown {
  return {
    type: "chart",
    debugSvg: false,
    title: "",
    showTitle: true,
    showDownloadMediaButton: false,
    showChartBrush: false,
    theme: "theme-blue",
    animate: false,
    fontSize: "medium",
    lineDatapointStyle: "hover",
    barHasBorder: "false",
    isLollipopChart: false,
    lollipopShape: "circle",
    lollipopColorStyle: "two-tone",
    visualizationSubType: "regular",
    barStyle: "",
    roundingStyle: "standard",
    tipRounding: "top",
    isResponsiveTicks: false,
    general: {
      showDownloadButton: false,
    },
    padding: {
      left: 5,
      right: 5,
    },
    yAxis: {
      hideAxis: false,
      displayNumbersOnBar: false,
      hideLabel: false,
      hideTicks: false,
      size: 50,
      gridLines: false,
      enablePadding: false,
      min: "",
      max: "",
      labelColor: "#333",
      tickLabelColor: "#333",
      tickColor: "#333",
      rightHideAxis: true,
      rightAxisSize: 0,
      rightLabel: "",
      rightLabelOffsetSize: 0,
      rightAxisLabelColor: "#333",
      rightAxisTickLabelColor: "#333",
      rightAxisTickColor: "#333",
      numTicks: "",
      axisPadding: 0,
      tickRotation: 0,
      anchors: [],
      dataKey: "count",
    },
    topAxis: {
      hasLine: false,
    },
    isLegendValue: false,
    barThickness: 0.35,
    barHeight: 25,
    barSpace: 15,
    heights: {
      vertical: 300,
      horizontal: 750,
    },
    xAxis: {
      sortDates: false,
      anchors: [],
      type: "categorical",
      showTargetLabel: true,
      targetLabel: "Target",
      hideAxis: false,
      hideLabel: false,
      hideTicks: false,
      size: 75,
      tickRotation: 0,
      min: "",
      max: "",
      labelColor: "#333",
      tickLabelColor: "#333",
      tickColor: "#333",
      numTicks: "",
      labelOffset: 65,
      axisPadding: 0,
      target: 0,
      maxTickRotation: 0,
      dataKey: "age_group",
    },
    orientation: "vertical",
    color: "pinkpurple",
    columns: {},
    legend: {
      behavior: "isolate",
      singleRow: false,
      colorCode: "",
      reverseLabelOrder: false,
      description: "",
      dynamicLegend: false,
      dynamicLegendDefaultText: "Show All",
      dynamicLegendItemLimit: 5,
      dynamicLegendItemLimitMessage: "Dynamic Legend Item Limit Hit.",
      dynamicLegendChartMessage: "Select Options from the Legend",
      lineMode: false,
      verticalSorted: false,
    },
    exclusions: {
      active: false,
      keys: [],
    },
    palette: "qualitative-bold",
    isPaletteReversed: false,
    twoColor: {
      palette: "monochrome-1",
      isPaletteReversed: false,
    },
    labels: false,
    dataFormat: {
      commas: false,
      prefix: "",
      suffix: "",
      abbreviated: false,
      bottomSuffix: "",
      bottomPrefix: "",
      bottomAbbreviated: false,
    },
    confidenceKeys: {},
    visual: {
      border: true,
      accent: true,
      background: true,
      verticalHoverLine: false,
      horizontalHoverLine: false,
    },
    useLogScale: false,
    filterBehavior: "Filter Change",
    highlightedBarValues: [],
    series: [],
    tooltips: {
      opacity: 90,
    },
    brush: {
      pattern_id: "brush_pattern",
      accent_color: "#ddd",
    },
    visualizationType: "Pie",
    data,
    dataFileSourceType: "file",
    dataDescription: {
      horizontal: false,
      series: false,
    },
    validated: 4.23,
  };
}

export function buildPieChartConfig(data: unknown[]): unknown {
  return {
    type: "chart",
    debugSvg: false,
    title: "",
    showTitle: true,
    showDownloadMediaButton: false,
    showChartBrush: false,
    theme: "theme-blue",
    animate: false,
    fontSize: "medium",
    lineDatapointStyle: "hover",
    barHasBorder: "false",
    isLollipopChart: false,
    lollipopShape: "circle",
    lollipopColorStyle: "two-tone",
    visualizationSubType: "regular",
    barStyle: "",
    roundingStyle: "standard",
    tipRounding: "top",
    isResponsiveTicks: false,
    general: {
      showDownloadButton: false,
    },
    padding: {
      left: 5,
      right: 5,
    },
    yAxis: {
      hideAxis: false,
      displayNumbersOnBar: false,
      hideLabel: false,
      hideTicks: false,
      size: 50,
      gridLines: false,
      enablePadding: false,
      min: "",
      max: "",
      labelColor: "#333",
      tickLabelColor: "#333",
      tickColor: "#333",
      rightHideAxis: true,
      rightAxisSize: 0,
      rightLabel: "",
      rightLabelOffsetSize: 0,
      rightAxisLabelColor: "#333",
      rightAxisTickLabelColor: "#333",
      rightAxisTickColor: "#333",
      numTicks: "",
      axisPadding: 0,
      tickRotation: 0,
      anchors: [],
      dataKey: "count",
    },
    topAxis: {
      hasLine: false,
    },
    isLegendValue: false,
    barThickness: 0.35,
    barHeight: 25,
    barSpace: 15,
    heights: {
      vertical: 300,
      horizontal: 750,
    },
    xAxis: {
      sortDates: false,
      anchors: [],
      type: "categorical",
      showTargetLabel: true,
      targetLabel: "Target",
      hideAxis: false,
      hideLabel: false,
      hideTicks: false,
      size: 75,
      tickRotation: 0,
      min: "",
      max: "",
      labelColor: "#333",
      tickLabelColor: "#333",
      tickColor: "#333",
      numTicks: "",
      labelOffset: 65,
      axisPadding: 0,
      target: 0,
      maxTickRotation: 0,
      dataKey: "label",
    },
    orientation: "vertical",
    color: "pinkpurple",
    columns: {},
    legend: {
      behavior: "isolate",
      singleRow: false,
      colorCode: "",
      reverseLabelOrder: false,
      description: "",
      dynamicLegend: false,
      dynamicLegendDefaultText: "Show All",
      dynamicLegendItemLimit: 5,
      dynamicLegendItemLimitMessage: "Dynamic Legend Item Limit Hit.",
      dynamicLegendChartMessage: "Select Options from the Legend",
      lineMode: false,
      verticalSorted: false,
    },
    exclusions: {
      active: false,
      keys: [],
    },
    palette: "qualitative-bold",
    isPaletteReversed: false,
    twoColor: {
      palette: "monochrome-1",
      isPaletteReversed: false,
    },
    labels: false,
    dataFormat: {
      commas: false,
      prefix: "",
      suffix: "",
      abbreviated: false,
      bottomSuffix: "",
      bottomPrefix: "",
      bottomAbbreviated: false,
    },
    confidenceKeys: {},
    visual: {
      border: true,
      accent: true,
      background: true,
      verticalHoverLine: false,
      horizontalHoverLine: false,
    },
    useLogScale: false,
    filterBehavior: "Filter Change",
    highlightedBarValues: [],
    series: [],
    tooltips: {
      opacity: 90,
    },
    brush: {
      pattern_id: "brush_pattern",
      accent_color: "#ddd",
    },
    visualizationType: "Pie",
    data,
    dataFileSourceType: "file",
    dataDescription: {
      horizontal: false,
      series: false,
    },
    validated: 4.23,
  };
}

export function transformStatus(data: StatusSummary): unknown[] {
  const transformedArray = [] as unknown[];
  const dataKeys = Object.keys(data).filter((_, index) => index !== 0);

  dataKeys.forEach((key) => {
    transformedArray.push({
      label: key,
      count: data[key as keyof typeof data],
    });
  });

  return transformedArray;
}
