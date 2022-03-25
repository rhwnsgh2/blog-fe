import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Topbar = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;

export const TopBarContainer = () => {
  return <Topbar> TopBar </Topbar>;
};
