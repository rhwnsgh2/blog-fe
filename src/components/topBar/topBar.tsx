import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Topbar = styled.div`
  display: flex;
  flex: 1;
  background-color: ${(props) => props.theme.mainBackground};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TopBarContainer = () => {
  return (
    <Topbar>
      <TopBarTitleContainer />
    </Topbar>
  );
};

const TopBarTitle = styled.div`
  flex: 1;
  color: ${(props) => props.theme.title};
  text-align: center;
`;

const TopBarTitleContainer = () => {
  return <TopBarTitle> TopBar </TopBarTitle>;
};
