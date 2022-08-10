import { useState } from "react";
import { UserModel } from "../../../models";
import { GitHubService } from "../../../services";

type Task = Pick<UserModel, "name" | "avatar_url"> & {
  task: string;
};

export const useTaskList = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);

  const handleAddTask = async (username: string, task: string) => {
    const { avatar_url, name } = await GitHubService.getUser(username);

    setTaskList((currentValue) => [
      ...currentValue,
      { avatar_url, name, task },
    ]);
  };

  const handleRemoveTask = (index: number) => {
    setTaskList((currentValue) => {
      const currentValueClone = [...currentValue];
      currentValueClone.splice(index, 1);
      return currentValueClone;
    });
  };

  return {
    taskList,
    handleAddTask,
    handleRemoveTask,
  };
};

export type UseTaskListReturn = ReturnType<typeof useTaskList>;
