import React from "react";
import { Button, Grid, Stack, TextField } from "@mui/material";
import { UseTaskFormReturn } from "../hooks/useTaskForm.hook";
import { UseTaskListReturn } from "../hooks/useTaskList.hook";

type TaskFormProps = Pick<
  UseTaskFormReturn,
  "task" | "username" | "setTask" | "setUsername" | "handleClearForm"
> &
  Pick<UseTaskListReturn, "handleAddTask">;

export const TaskForm: React.FC<TaskFormProps> = ({
  task,
  username,
  setTask,
  setUsername,
  handleAddTask,
  handleClearForm,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddTask(username, task);
    handleClearForm();
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
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />
        </Grid>

        <Grid xs={12} sm={4} item>
          <TextField
            label="Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            fullWidth
          />
        </Grid>

        <Grid xs={12} sm={4} item>
          <Button
            sx={{ height: "3.6rem" }}
            type="submit"
            variant="contained"
            fullWidth
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
};
