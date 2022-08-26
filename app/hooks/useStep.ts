import { useState } from "react";

export default function useStep() {
  const [current, setCurrent] = useState("RegisterPhone");
  const [completedForms, setCompletedForms] = useState(["RegisterPhone"]);

  const nextCurrent = (newCurrent: string) => {
    setCurrent(newCurrent);
    setCompletedForms([...completedForms, newCurrent]);
  };

  return {
    currentStep: current,
    nextCurrent,
    progress: completedForms,
  };
}
