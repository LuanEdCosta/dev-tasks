import { useState } from "react";

const DEFAULT_ERRORS = {
  isUsernameEmpty: false,
  isTaskEmpty: false,
};

export const useTaskForm = () => {
  const [username, setUsername] = useState("");
  const [task, setTask] = useState("");

  const [errors, setErrors] = useState(DEFAULT_ERRORS);

  const handleClearForm = () => {
    setUsername("");
    setTask("");
  };

  const handleValidate = (): boolean => {
    const isUsernameEmpty = username.trim() === "";
    const isTaskEmpty = task.trim() === "";

    setErrors({
      isTaskEmpty,
      isUsernameEmpty,
    });

    return [isUsernameEmpty, isTaskEmpty].every((isError) => !isError);
  };

  return {
    task,
    errors,
    username,
    setTask,
    setUsername,
    handleValidate,
    handleClearForm,
  };
};

export type UseTaskFormReturn = ReturnType<typeof useTaskForm>;
