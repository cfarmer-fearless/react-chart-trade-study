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

  data.forEach((row) => {
    if (!Object.keys(counts).includes(row.age_group)) {
      counts[row.age_group] = 1;
    } else {
      counts[row.age_group]++;
    }
  });

  return counts;
}
