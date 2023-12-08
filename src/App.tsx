import { useEffect, useState } from "react";
import "./App.css";
import {
  CovidCountByAgeGroup,
  getCovidCases,
  transformCovidCasesToCountsByAgeGroup,
} from "./api/status";
import { CovidOpenVizWrapper } from "./components/CovidOpenVizWrapper";
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
        <Performance id="cove-bar-chart">
          <CovidOpenVizWrapper data={covidData} />
        </Performance>
      )}
    </div>
  );
}

export default App;
