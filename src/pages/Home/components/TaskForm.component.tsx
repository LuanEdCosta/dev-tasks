import React from "react";
import {
  Button,
  CircularProgress,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { UseTaskFormReturn } from "../hooks/useTaskForm.hook";
import { UseTaskListReturn } from "../hooks/useTaskList.hook";

type TaskFormProps = Pick<
  UseTaskFormReturn,
  | "task"
  | "errors"
  | "username"
  | "setTask"
  | "setUsername"
  | "handleValidate"
  | "handleClearForm"
> &
  Pick<UseTaskListReturn, "isLoading" | "handleAddTask">;

export const TaskForm: React.FC<TaskFormProps> = ({
  task,
  errors,
  username,
  isLoading,
  setTask,
  setUsername,
  handleAddTask,
  handleValidate,
  handleClearForm,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (handleValidate()) {
      handleAddTask(username, task);
      handleClearForm();
    }
  };

  return (
    <Stack
      p={4}
      bgcolor="white"
      borderRadius={2}
      border="1px solid"
      borderColor="grey.300"
    >
      <Grid component="form" onSubmit={handleSubmit} spacing={2} container>
        <Grid xs={12} sm={4} item>
          <TextField
            label="GitHub username"
            value={username}
            error={errors.isUsernameEmpty}
            helperText={
              errors.isUsernameEmpty && "This field should not be empty"
            }
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />
        </Grid>

        <Grid xs={12} sm={4} item>
          <TextField
            label="Task"
            value={task}
            error={errors.isTaskEmpty}
            helperText={errors.isTaskEmpty && "This field should not be empty"}
            onChange={(e) => setTask(e.target.value)}
            fullWidth
          />
        </Grid>

        <Grid xs={12} sm={4} item>
          <Button
            sx={{ height: "3.6rem" }}
            type="submit"
            variant="contained"
            disabled={isLoading}
            endIcon={
              isLoading && <CircularProgress size={20} color="inherit" />
            }
            fullWidth
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
};
