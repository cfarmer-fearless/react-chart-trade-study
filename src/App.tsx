import { useEffect, useState } from "react";
import "./App.css";
import { StatusResponse, getStatus } from "./api/status";
import { buildPieChartConfig, transformStatus } from "./utils/open-viz";
import CdcChart from "@cdc/chart";

function App() {
  const [status, setStatus] = useState<StatusResponse | undefined>();
  const [pieConfig, setPieConfig] = useState<unknown | undefined>();

  useEffect(() => {
    async function initState() {
      const status = await getStatus();
      setStatus(status);
    }
    initState();
  }, []);

  useEffect(() => {
    if (status) {
      const openVizPieData = transformStatus(status.summary);
      setPieConfig(buildPieChartConfig(openVizPieData));
    }
  }, [status]);

  return <>{pieConfig && <CdcChart config={pieConfig} />}</>;
}

export default App;
