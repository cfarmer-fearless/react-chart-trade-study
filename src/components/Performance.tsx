import { Profiler } from "react";

export type PerformanceProps = {
  id: string;
  onRender?: (
    id: string,
    phase: string,
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number
  ) => void;
  children: React.ReactNode;
};

export type PerformanceLog = {
  id: string;
  phase: string;
  actualDuration: number;
  baseDuration: number;
  startTime: number;
  commitTime: number;
};

export const Performance = ({ id, onRender, children }: PerformanceProps) => {
  let hasOnRender: (
    id: string,
    phase: string,
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number
  ) => void;

  if (!onRender) {
    hasOnRender = (
      id: string,
      phase: string,
      actualDuration: number,
      baseDuration: number,
      startTime: number,
      commitTime: number
    ) => {
      console.log(
        `
        ID: ${id}
        Phase: ${phase}
        Render duration: ${actualDuration}
        Re-render duration (update): ${baseDuration}
        Start render or update: ${startTime}
        Comitted to render or update ${commitTime}
        `
      );
    };
  } else {
    hasOnRender = onRender;
  }

  return (
    <Profiler id={id} onRender={hasOnRender}>
      {children}
    </Profiler>
  );
};
