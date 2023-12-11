import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

import { CovidCountByAgeGroup } from "../api/status";
import { transformStatusForRechartsPieChart } from "../utils/recharts";

export function RechartsPieChartWrapper(data: CovidCountByAgeGroup[]) {
  const transformedData = transformStatusForRechartsPieChart(data);

  return (
    <PieChart width={600} height={500}>
      <Pie
        dataKey="count"
        isAnimationActive={false}
        data={transformedData}
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#005eaa"
        label
      />
      <Tooltip />
    </PieChart>
  );
}
