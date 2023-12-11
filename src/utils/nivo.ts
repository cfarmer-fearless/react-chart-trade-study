import { CovidCountByAgeGroup } from "../api/status";

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
