import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { CovidCountByAgeGroup } from "../api/status";
import { transformStatusForRechartsBarChart } from "../utils/recharts";

export function RechartsBarChartWrapper(data: CovidCountByAgeGroup[]) {
  const transformedData = transformStatusForRechartsBarChart(data);

  return (
    <BarChart
      width={500}
      height={300}
      data={transformedData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
}
