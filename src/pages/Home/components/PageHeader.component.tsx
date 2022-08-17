import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const PageHeader: React.FC = () => {
  const { t } = useTranslation("Common");

  return <Typography variant="h5">{t("appName")}</Typography>;
};
