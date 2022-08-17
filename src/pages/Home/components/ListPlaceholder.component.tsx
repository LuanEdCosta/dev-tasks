import { List } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

export const ListPlaceholder: React.FC = () => {
  return (
    <Stack spacing={2} alignItems="center">
      <Stack color="grey.600" height="4rem" width="4rem" fontSize="4rem">
        <List color="inherit" fontSize="inherit" />
      </Stack>

      <Typography color="text.secondary">No Tasks to Show</Typography>
    </Stack>
  );
};
