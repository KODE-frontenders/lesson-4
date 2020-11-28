import React from "react";
import { ToggleSwitch } from "shared/ui/ui";
import { ThemeContext } from "styled-components";

type Props = {
  toggleTheme: any;
};

export const ThemeSwitch: React.FC<Props> = ({ toggleTheme }) => {
  const { mode: themeMode } = React.useContext(ThemeContext);

  const isDark = themeMode === "dark";

  return <ToggleSwitch checked={isDark} onClick={toggleTheme} />;
};
