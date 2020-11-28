import React from "react";
import { ReactComponent as HomeIcon } from "shared/icons/home-icon.svg";
import { ReactComponent as SettingsIcon } from "shared/icons/settings-icon.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  route: any;
};

const ROUTES_ICONS_MAP = {
  todos: <HomeIcon />,
  settings: <SettingsIcon />,
};

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.sizeGrid.base}px;
  padding-right: 0;
  display: block;
  line-height: 1;
`;

export const IconLink = ({ route }) => {
  const path = `/${route}`;

  return <StyledLink to={path}>{ROUTES_ICONS_MAP[route]}</StyledLink>;
};
