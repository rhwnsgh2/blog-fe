import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const NavigationBar = () => {
  const sideBarList = useSelector((state: RootState) => state.sideBar);
  const sideBarView = useSelector((state: RootState) => state.sideBarView);
  if (!sideBarView.visible) return null;
  const fields = sideBarList.map((item) => {
    return <NavigationBarField key={item.path} name={item.title} />;
  });

  return <div>{fields}</div>;
};

type NavigationBarFiledType = {
  name: string;
};
const NavigationBarField: React.FC<NavigationBarFiledType> = ({ name }) => {
  return <div>{name}</div>;
};
