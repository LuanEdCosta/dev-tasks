import { Stack } from "@mui/material";

import { useTaskForm } from "./hooks/useTaskForm.hook";
import { useTaskList } from "./hooks/useTaskList.hook";
import { TaskForm } from "./components/TaskForm.component";
import { TaskList } from "./components/TaskList.component";
import { PageHeader } from "./components/PageHeader.component";
import { ListPlaceholder } from "./components/ListPlaceholder.component";

export const HomePage: React.FC = () => {
  const {
    task,
    errors,
    username,
    setTask,
    setUsername,
    handleClearForm,
    handleValidate,
  } = useTaskForm();

  const { taskList, isLoading, handleAddTask, handleRemoveTask } =
    useTaskList();

  return (
    <Stack flex={1} bgcolor="grey.50" justifyContent="center">
      <Stack spacing={2} p={2} width="100%" maxWidth="md" marginX="auto">
        <PageHeader />

        <TaskForm
          task={task}
          errors={errors}
          username={username}
          isLoading={isLoading}
          setTask={setTask}
          setUsername={setUsername}
          handleAddTask={handleAddTask}
          handleClearForm={handleClearForm}
          handleValidate={handleValidate}
        />

        {(() => {
          if (taskList.length === 0) return <ListPlaceholder />;
          return (
            <TaskList taskList={taskList} handleRemoveTask={handleRemoveTask} />
          );
        })()}
      </Stack>
    </Stack>
  );
};
