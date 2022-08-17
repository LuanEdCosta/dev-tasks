import { List } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const ListPlaceholder: React.FC = () => {
  const { t } = useTranslation("Home");

  return (
    <Stack spacing={2} alignItems="center">
      <Stack color="grey.600" height="4rem" width="4rem" fontSize="4rem">
        <List color="inherit" fontSize="inherit" />
      </Stack>

      <Typography color="text.secondary">{t("emptyMessage")}</Typography>
    </Stack>
  );
};
