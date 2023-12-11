import { useEffect, useState } from "react";
import "./App.css";
import {
  CovidCountByAgeGroup,
  getCovidCases,
  transformCovidCasesToCountsByAgeGroup,
} from "./api/status";

import { CovidOpenVizWrapper } from "./components/CovidOpenVizWrapper";

import { RechartsBarChartWrapper } from "./components/RechartsBarChartWrapper";
import { RechartsPieChartWrapper } from "./components/RechartsPieChartWrapper";

import { NivoPieChartWrapper } from "./components/NivoPieChartWrapper";
import { NivoBarChartWrapper } from "./components/NivoBarChartWrapper";

import { Performance } from "./components/Performance";

function App() {
  const [covidData, setCovidData] = useState<CovidCountByAgeGroup[]>();

  useEffect(() => {
    async function initState() {
      const rawCovidData = await getCovidCases();
      const countsByAgeGroup =
        transformCovidCasesToCountsByAgeGroup(rawCovidData);
      setCovidData(countsByAgeGroup);
    }
    initState();
  }, []);

  return (
    <div>
      {covidData && (
        <>
          <Performance id="cove-bar-chart">
            <CovidOpenVizWrapper data={covidData} />
          </Performance>
          <Performance id="recharts-bar-chart">
            <RechartsBarChartWrapper data={covidData} />
          </Performance>
          <Performance id="recharts-pie-chart">
            <RechartsPieChartWrapper data={covidData} />
          </Performance>
          <Performance id="nivo-bar-chart">
            <NivoBarChartWrapper data={covidData} />
          </Performance>
          <Performance id="nivo-pie-chart">
            <NivoPieChartWrapper data={covidData} />
          </Performance>
        </>
      )}
    </div>
  );
}

export default App;
