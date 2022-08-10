import { Stack } from "@mui/material";
import { TaskCard } from "../../../components";
import { UseTaskListReturn } from "../hooks/useTaskList.hook";

type TaskListProps = Pick<UseTaskListReturn, "taskList" | "handleRemoveTask">;

export const TaskList: React.FC<TaskListProps> = ({
  taskList,
  handleRemoveTask,
}) => {
  return (
    <Stack bgcolor="white" borderRadius={2} p={2} spacing={1}>
      {taskList.map(({ avatar_url, name, task }, index) => {
        return (
          <TaskCard
            handleDelete={() => handleRemoveTask(index)}
            key={index}
            avatar={avatar_url}
            name={name}
            task={task}
          />
        );
      })}
    </Stack>
  );
};
