import { Delete } from "@mui/icons-material";
import { Avatar, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export interface TaskCardProps {
  avatar: string;
  name: string;
  task: string;
  handleDelete: () => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  avatar,
  name,
  task,
  handleDelete,
}) => {
  return (
    <Stack
      p={1}
      spacing={2}
      direction="row"
      alignItems="center"
      bgcolor="grey.50"
    >
      <Avatar src={avatar}>{name.substring(0, 2)}</Avatar>

      <Stack flex={1}>
        <Typography>{name}</Typography>
        <Typography color="text.secondary" variant="body2">
          {task}
        </Typography>
      </Stack>

      <IconButton onClick={handleDelete}>
        <Delete />
      </IconButton>
    </Stack>
  );
};
