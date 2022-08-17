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
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation(["Home", "Glossary", "Validation"]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (handleValidate()) {
      if (await handleAddTask(username, task)) handleClearForm();
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
            value={username}
            label={t("usernameLabel")}
            error={errors.isUsernameEmpty}
            helperText={errors.isUsernameEmpty && t("Validation:emptyField")}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />
        </Grid>

        <Grid xs={12} sm={4} item>
          <TextField
            value={task}
            label={t("taskLabel")}
            error={errors.isTaskEmpty}
            helperText={errors.isTaskEmpty && t("Validation:emptyField")}
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
            {t("Glossary:add")}
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
};
