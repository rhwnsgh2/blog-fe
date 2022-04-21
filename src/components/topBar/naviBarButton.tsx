import React from 'react';
import * as FaIcons from 'react-icons/fa';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeViewSideBar } from '../../redux/slice/sideBar';

const Icon = styled(FaIcons.FaBars)`
  display: flex;
  height: 4rem;
  width: 4rem;
  color: ${(props) => props.theme.title};
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const NaviBarButton: React.VFC = () => {
  const dispatch = useDispatch();
  return (
    <Icon
      onClick={() => {
        dispatch(changeViewSideBar());
      }}
    />
  );
};
