import React from 'react';
import { render, screen } from '@testing-library/react';
import { NavigationBarContainer, SideBar, SideBarList } from './navBar';
import { SideBarData } from './navBarData';

describe('SideBar Testing', () => {
  describe('SideBar class', () => {
    let sideBar: SideBar;
    beforeEach(() => {
      const routerData: SideBarData = { title: 'react', path: '/react' };
      sideBar = new SideBar(routerData);
    });
    it('getter Testing', () => {
      expect(sideBar.title).toEqual('react');
      expect(sideBar.path).toEqual('/react');
    });
  });
  describe('SideBarList testing', () => {
    it('SideBarList testing', () => {
      const routerData: Array<SideBarData> = [
        { title: 'react', path: '/react' },
        { title: 'flutter', path: '/futter' },
      ];
      const list = SideBarList(routerData);
      expect(list.length).toEqual(2);
    });
  });
});
