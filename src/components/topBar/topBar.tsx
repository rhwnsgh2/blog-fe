import React, { FunctionComponent, ReactElement } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../redux/slice/theme';
import { ReducerType } from '../../redux/rootReducer';
import { theme } from '../../styles/theme';
import { NaviBarButton } from './naviBarButton';

const Topbar = styled.div`
  display: flex;
  height: 8rem;
  background-color: ${(props) => props.theme.mainBackground};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TopBarContainer = (): React.ReactElement => {
  return (
    <Topbar>
      <NaviBarButton />
      <TopBarTitle />
      <SetThemeButton />
    </Topbar>
  );
};

const TopBarTitleStyled = styled.div`
  flex: 1;
  color: ${(props) => props.theme.title};
  text-align: center;
  text-decoration: none;
  font-size: 2rem;
`;

const TopBarTitle = (): ReactElement | null => {
  return <TopBarTitleStyled> TopBar </TopBarTitleStyled>;
};

const SetThemeButton = (): ReactElement => {
  const currentTheme = useSelector<ReducerType, DefaultTheme>((state) => state.themeReducer);
  const dispatch = useDispatch();
  const handleChangeTheme = () => {
    dispatch(changeTheme(currentTheme === theme.darkTheme ? theme.lightTheme : theme.darkTheme));
  };
  return <input type="button" value="dark" onClick={handleChangeTheme} />;
};
