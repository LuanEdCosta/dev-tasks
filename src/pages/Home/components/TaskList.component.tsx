import { Stack } from "@mui/material";
import { TaskCard } from "../../../components";
import { UseTaskListReturn } from "../hooks/useTaskList.hook";

type TaskListProps = Pick<UseTaskListReturn, "taskList" | "handleRemoveTask">;

export const TaskList: React.FC<TaskListProps> = ({
  taskList,
  handleRemoveTask,
}) => {
  return (
    <Stack
      p={4}
      spacing={1}
      bgcolor="white"
      borderRadius={2}
      border="1px solid"
      borderColor="grey.300"
    >
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
