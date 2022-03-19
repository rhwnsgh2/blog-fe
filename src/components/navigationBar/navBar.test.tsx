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
    let routerData: Array<SideBarData>;
    beforeEach(() => {
      routerData = [
        { title: 'react', path: '/react' },
        { title: 'flutter', path: '/futter' },
      ];
    });
    it('SideBarList length', () => {
      const list = SideBarList(routerData);
      expect(list.length).toEqual(2);
    });
    it('SideBarList has SideBar Instance', () => {
      const list = SideBarList(routerData);
      expect(list[0]).toBeInstanceOf(SideBar);
    });
  });
});
