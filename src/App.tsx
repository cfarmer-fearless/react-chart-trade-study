import { useEffect, useState } from "react";
import "./App.css";
import {
  CovidCountByAgeGroup,
  getCovidCases,
  transformCovidCasesToCountsByAgeGroup,
} from "./api/status";

import {
  // CovidOpenVizPieChartWrapper,
  CovidOpenVizBarChartWrapper,
} from "./components/CovidOpenVizWrapper";

import { RechartsBarChartWrapper } from "./components/RechartsBarChartWrapper";
import { RechartsPieChartWrapper } from "./components/RechartsPieChartWrapper";

import { NivoPieChartWrapper } from "./components/NivoPieChartWrapper";
import { NivoBarChartWrapper } from "./components/NivoBarChartWrapper";

import { Performance, PerformanceLog } from "./components/Performance";

function App() {
  const [covidData, setCovidData] = useState<CovidCountByAgeGroup[]>();
  const [openVizBarChartPerformanceData, setOpenVizBarChartPerformanceData] =
    useState<PerformanceLog>();
  const [rechartsBarChartPerformanceData, setRechartsBarChartPerformanceData] =
    useState<PerformanceLog>();
  const [rechartsPieChartPerformanceData, setRechartsPieChartPerformanceData] =
    useState<PerformanceLog>();
  const [nivoBarChartPerformanceData, setNivoBarChartPerformanceData] =
    useState<PerformanceLog>();
  const [nivoPieChartPerformanceData, setNivoPieChartPerformanceData] =
    useState<PerformanceLog>();

  const OpenVizBarChartOnRender = (
    id: string,
    phase: string,
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number
  ) => {
    !openVizBarChartPerformanceData &&
      setOpenVizBarChartPerformanceData({
        id: id,
        phase: phase,
        actualDuration: actualDuration,
        baseDuration: baseDuration,
        startTime: startTime,
        commitTime: commitTime,
      });
  };

  const RechartsBarChartOnRender = (
    id: string,
    phase: string,
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number
  ) => {
    !rechartsBarChartPerformanceData &&
      setRechartsBarChartPerformanceData({
        id: id,
        phase: phase,
        actualDuration: actualDuration,
        baseDuration: baseDuration,
        startTime: startTime,
        commitTime: commitTime,
      });
  };

  const RechartsPieChartOnRender = (
    id: string,
    phase: string,
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number
  ) => {
    !rechartsPieChartPerformanceData &&
      setRechartsPieChartPerformanceData({
        id: id,
        phase: phase,
        actualDuration: actualDuration,
        baseDuration: baseDuration,
        startTime: startTime,
        commitTime: commitTime,
      });
  };

  const NivoBarChartOnRender = (
    id: string,
    phase: string,
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number
  ) => {
    !nivoBarChartPerformanceData &&
      setNivoBarChartPerformanceData({
        id: id,
        phase: phase,
        actualDuration: actualDuration,
        baseDuration: baseDuration,
        startTime: startTime,
        commitTime: commitTime,
      });
  };

  const NivoPieChartOnRender = (
    id: string,
    phase: string,
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number
  ) => {
    !nivoPieChartPerformanceData &&
      setNivoPieChartPerformanceData({
        id: id,
        phase: phase,
        actualDuration: actualDuration,
        baseDuration: baseDuration,
        startTime: startTime,
        commitTime: commitTime,
      });
  };

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
          <h2>Performance Testing</h2>
          <h4>OpenViz (COVE)</h4>
          <div className="section-wrapper-cove">
            <div className="section-left-cove">
              <Performance
                id="cove-bar-chart"
                onRender={OpenVizBarChartOnRender}
              >
                <CovidOpenVizBarChartWrapper data={covidData} />
              </Performance>
            </div>
            <div className="section-right-cove">
              <b>Bar Chart Performance Stats: </b>
              <br />
              <br />
              {`ID: ${openVizBarChartPerformanceData?.id}`}
              <br />
              <br />
              {`Phase: ${openVizBarChartPerformanceData?.phase}`}
              <br />
              <br />
              {`Render duration: ${openVizBarChartPerformanceData?.actualDuration}`}
              <br />
              <br />
              {`Re-render duration (update): ${openVizBarChartPerformanceData?.baseDuration}`}
              <br />
              <br />
              {`Start render or update: ${openVizBarChartPerformanceData?.startTime}`}
              <br />
              <br />
              {`Comitted to render or update ${openVizBarChartPerformanceData?.commitTime}`}
              <br />
            </div>
          </div>
          <h4>Recharts</h4>
          <div className="section-wrapper">
            {/* <Performance id="cove-pie-chart">
            <CovidOpenVizPieChartWrapper data={covidData} />
          </Performance> */}
            <div className="section-left">
              <Performance
                id="recharts-bar-chart"
                onRender={RechartsBarChartOnRender}
              >
                <RechartsBarChartWrapper data={covidData} />
              </Performance>
            </div>
            <div className="section-right section-right-rechart-bar">
              <b>Bar Chart Performance Stats: </b>
              <br />
              <br />
              {`ID: ${rechartsBarChartPerformanceData?.id}`}
              <br />
              <br />
              {`Phase: ${rechartsBarChartPerformanceData?.phase}`}
              <br />
              <br />
              {`Render duration: ${rechartsBarChartPerformanceData?.actualDuration}`}
              <br />
              <br />
              {`Re-render duration (update): ${rechartsBarChartPerformanceData?.baseDuration}`}
              <br />
              <br />
              {`Start render or update: ${rechartsBarChartPerformanceData?.startTime}`}
              <br />
              <br />
              {`Comitted to render or update ${rechartsBarChartPerformanceData?.commitTime}`}
              <br />
            </div>
          </div>
          <hr />
          <div className="section-wrapper section-wrapper-rechart-pie">
            <div className="section-left">
              <Performance
                id="recharts-pie-chart"
                onRender={RechartsPieChartOnRender}
              >
                <RechartsPieChartWrapper data={covidData} />
              </Performance>
            </div>
            <div className="section-right">
              <b>Pie Chart Performance Stats: </b>
              <br />
              <br />
              {`ID: ${rechartsPieChartPerformanceData?.id}`}
              <br />
              <br />
              {`Phase: ${rechartsPieChartPerformanceData?.phase}`}
              <br />
              <br />
              {`Render duration: ${rechartsPieChartPerformanceData?.actualDuration}`}
              <br />
              <br />
              {`Re-render duration (update): ${rechartsPieChartPerformanceData?.baseDuration}`}
              <br />
              <br />
              {`Start render or update: ${rechartsPieChartPerformanceData?.startTime}`}
              <br />
              <br />
              {`Comitted to render or update ${rechartsPieChartPerformanceData?.commitTime}`}
              <br />
            </div>
          </div>
          <h4>Nivo</h4>
          <div className="section-wrapper section-wrapper-nivo-bar">
            <div className="section-left">
              <Performance id="nivo-bar-chart" onRender={NivoBarChartOnRender}>
                <NivoBarChartWrapper data={covidData} />
              </Performance>
            </div>
            <div className="section-right">
              <b>Bar Chart Performance Stats: </b>
              <br />
              <br />
              {`ID: ${nivoBarChartPerformanceData?.id}`}
              <br />
              <br />
              {`Phase: ${nivoBarChartPerformanceData?.phase}`}
              <br />
              <br />
              {`Render duration: ${nivoBarChartPerformanceData?.actualDuration}`}
              <br />
              <br />
              {`Re-render duration (update): ${nivoBarChartPerformanceData?.baseDuration}`}
              <br />
              <br />
              {`Start render or update: ${nivoBarChartPerformanceData?.startTime}`}
              <br />
              <br />
              {`Comitted to render or update ${nivoBarChartPerformanceData?.commitTime}`}
              <br />
            </div>
          </div>
          <hr />
          <div className="section-wrapper section-wrapper-nivo-pie">
            <div className="section-left">
              <Performance id="nivo-pie-chart" onRender={NivoPieChartOnRender}>
                <NivoPieChartWrapper data={covidData} />
              </Performance>
            </div>
            <div className="section-right">
              <b>Pie Chart Performance Stats: </b>
              <br />
              <br />
              {`ID: ${nivoPieChartPerformanceData?.id}`}
              <br />
              <br />
              {`Phase: ${nivoPieChartPerformanceData?.phase}`}
              <br />
              <br />
              {`Render duration: ${nivoPieChartPerformanceData?.actualDuration}`}
              <br />
              <br />
              {`Re-render duration (update): ${nivoPieChartPerformanceData?.baseDuration}`}
              <br />
              <br />
              {`Start render or update: ${nivoPieChartPerformanceData?.startTime}`}
              <br />
              <br />
              {`Comitted to render or update ${nivoPieChartPerformanceData?.commitTime}`}
              <br />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
