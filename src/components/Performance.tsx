import { Profiler } from "react";

export type PerformanceProps = {
  id: string;
  onRender?: () => void;
  children: React.ReactNode;
};

export const Performance = ({ id, onRender, children }: PerformanceProps) => {
  let hasOnRender;

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
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime
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
