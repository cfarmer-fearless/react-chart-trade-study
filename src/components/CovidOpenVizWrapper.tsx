import { CovidCountByAgeGroup } from "../api/status";
import { buildBarChartConfig } from "../utils/open-viz";
import CdcChart from "@cdc/chart";

type CovidOpenVizWrapperProps = {
  data: CovidCountByAgeGroup[];
};

export function CovidOpenVizWrapper({ data }: CovidOpenVizWrapperProps) {
  const chartConfig = buildBarChartConfig(data);

  return <CdcChart config={chartConfig} />;
}
