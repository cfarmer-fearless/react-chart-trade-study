import { CovidCountByAgeGroup } from "../api/status";
import { buildBarChartConfig, buildPieChartConfig } from "../utils/open-viz";
import CdcChart from "@cdc/chart";

type CovidOpenVizWrapperProps = {
  data: CovidCountByAgeGroup[];
};

export function CovidOpenVizBarChartWrapper({
  data,
}: CovidOpenVizWrapperProps) {
  const chartConfig = buildBarChartConfig(data);

  return <CdcChart config={chartConfig} />;
}

export function CovidOpenVizPieChartWrapper({
  data,
}: CovidOpenVizWrapperProps) {
  const chartConfig = buildPieChartConfig(data);

  return <CdcChart config={chartConfig} />;
}
