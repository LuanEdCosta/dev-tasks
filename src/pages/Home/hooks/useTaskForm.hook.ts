import { useState } from "react";

export const useTaskForm = () => {
  const [username, setUsername] = useState("");
  const [task, setTask] = useState("");

  const handleClearForm = () => {
    setUsername("");
    setTask("");
  };

  return {
    task,
    username,
    setTask,
    setUsername,
    handleClearForm,
  };
};

export type UseTaskFormReturn = ReturnType<typeof useTaskForm>;
