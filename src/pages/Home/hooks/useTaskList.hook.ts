import { useSnackbar } from "notistack";
import { useState } from "react";
import { UserModel } from "../../../models";
import { GitHubService } from "../../../services";

type Task = Required<
  Pick<UserModel, "name" | "avatar_url"> & {
    task: string;
  }
>;

export const useTaskList = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleAddTask = async (
    username: string,
    task: string
  ): Promise<boolean> => {
    try {
      setIsLoading(true);
      const { avatar_url, name } = await GitHubService.getUser(username);

      setTaskList((currentValue) => [
        ...currentValue,
        { avatar_url, name: name || username, task },
      ]);

      return true;
    } catch (e) {
      enqueueSnackbar("Github user not found", {
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }

    return false;
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
    isLoading,
    handleAddTask,
    handleRemoveTask,
  };
};

export type UseTaskListReturn = ReturnType<typeof useTaskList>;
