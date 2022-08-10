import { Stack } from "@mui/material";

import { useTaskForm } from "./hooks/useTaskForm.hook";
import { useTaskList } from "./hooks/useTaskList.hook";
import { TaskForm } from "./components/TaskForm.component";
import { TaskList } from "./components/TaskList.component";
import { PageHeader } from "./components/PageHeader.component";

export const HomePage: React.FC = () => {
  const { task, username, setTask, setUsername, handleClearForm } =
    useTaskForm();

  const { taskList, handleAddTask, handleRemoveTask } = useTaskList();

  return (
    <Stack flex={1} bgcolor="grey.50" justifyContent="center">
      <Stack spacing={2} width="100%" maxWidth="md" marginX="auto">
        <PageHeader />

        <TaskForm
          task={task}
          username={username}
          setTask={setTask}
          setUsername={setUsername}
          handleClearForm={handleClearForm}
          handleAddTask={handleAddTask}
        />

        <TaskList taskList={taskList} handleRemoveTask={handleRemoveTask} />
      </Stack>
    </Stack>
  );
};
