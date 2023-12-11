import { BarDatum, ResponsiveBar } from "@nivo/bar";

import { CovidCountByAgeGroup } from "../api/status";
import { transformStatusForNivoBarChart } from "../utils/nivo";

export function NivoBarChartWrapper(data: CovidCountByAgeGroup[]) {
  const transformedData = transformStatusForNivoBarChart(data);

  return (
    <ResponsiveBar
      data={transformedData as BarDatum[]}
      keys={["count"]}
      indexBy="age_group"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.4}
      valueScale={{ type: "linear" }}
      colors="#005eaa"
      animate={true}
      enableLabel={false}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendPosition: "middle",
        legendOffset: -40,
      }}
    />
  );
}
