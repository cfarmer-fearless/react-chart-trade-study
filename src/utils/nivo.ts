import { CovidCountByAgeGroup } from "../api/status";

export function transformStatusForNivoPieChart(
  data: CovidCountByAgeGroup[]
): unknown[] {
  const transformedArray = [] as unknown[];

  data?.data.forEach(({ age_group, count }) => {
    const randColor = Math.round(328 * Math.random());

    transformedArray.push({
      id: age_group,
      label: age_group,
      value: count,
      color: `hsl(${randColor}, 70%, 50%)`,
    });
  });

  return transformedArray;
}

export function transformStatusForNivoBarChart(
  data: CovidCountByAgeGroup[]
): unknown[] {
  const transformedArray = [] as unknown[];

  data?.data.forEach(({ age_group, count }) => {
    transformedArray.push({
      age_group: age_group,
      count: count,
    });
  });

  return transformedArray;
}
