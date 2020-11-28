import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  max-height: 100%;
  overflow-y: scroll;
`;

export const Body = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};
