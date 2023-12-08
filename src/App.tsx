import { useEffect, useState } from "react";
import "./App.css";
import {
  CovidCountByAgeGroup,
  getCovidCases,
  transformCovidCasesToCountsByAgeGroup,
} from "./api/status";
import { CovidOpenVizWrapper } from "./components/CovidOpenVizWrapper";

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

  return <div>{covidData && <CovidOpenVizWrapper data={covidData} />}</div>;
}

export default App;
