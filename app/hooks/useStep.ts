import { useState } from "react";

export default function useStep() {
  const [current, setCurrent] = useState("RegisterPhone");
  const [completedForms, setCompletedForms] = useState([]);

  const nextCurrent = (newCurrent: string) => {
    setCurrent(newCurrent);
    setCompletedForms([...completedForms, current]);
  };

  return {
    currentStep: current,
    nextCurrent,
    progress: completedForms,
  };
}
