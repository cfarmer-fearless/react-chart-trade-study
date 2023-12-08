export interface StatusResponse {
  summary: StatusSummary;
}

export interface StatusSummary {
  total_issues: number;
  warnings: number;
  errors: number;
}

export interface CovidCase {
  case_month: string;
  res_state: string;
  state_fips_code: string;
  res_county: string;
  county_fips_code: string;
  age_group: string;
  sex: string;
}

export type CovidCountByAgeGroup = {
  age_group: string;
  count: number;
};

export async function getStatus(): Promise<StatusResponse> {
  const response = await fetch("http://localhost:8081/status");
  return await response.json();
}

export async function getCovidCases(): Promise<CovidCase[]> {
  const response = await fetch("https://data.cdc.gov/resource/n8mc-b4w4.json");
  return await response.json();
}

export function transformCovidCasesToCountsByAgeGroup(
  data: CovidCase[]
): CovidCountByAgeGroup[] {
  const counts: CovidCountByAgeGroup[] = [];
  const foundGroups: string[] = [];

  data.forEach((row) => {
    if (!foundGroups.includes(row.age_group)) {
      counts.push({
        age_group: row.age_group,
        count: 1,
      });
    } else {
      counts.forEach((group) => {
        if (group.age_group === row.age_group) {
          group.count++;
        }
      });
    }
  });

  return counts;
}
