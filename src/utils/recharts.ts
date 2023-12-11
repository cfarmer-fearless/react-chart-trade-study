import { CovidCountByAgeGroup } from "../api/status";

export function transformStatusForRechartsBarChart(
  data: CovidCountByAgeGroup[]
): unknown[] {
  const transformedArray = [] as unknown[];

  data?.data.forEach(({ age_group, count }) => {
    transformedArray.push({
      name: age_group,
      count: count,
    });
  });

  return transformedArray;
}

export function transformStatusForRechartsPieChart(
  data: CovidCountByAgeGroup[]
): unknown[] {
  const transformedArray = [] as unknown[];

  data?.data.forEach(({ age_group, count }) => {
    transformedArray.push({
      name: age_group,
      count: count,
    });
  });

  return transformedArray;
}
