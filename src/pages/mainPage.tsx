import React from 'react';
import styled from 'styled-components';
import MainBody from '../components/MainBody';
import MainHeader from '../components/MainHeader';
import mainPage from '../assets/mainPage.png';
const MainPage = () => {
  return (
    <MainWrapper>
      <MainHeader />
      <MainBody />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
export default MainPage;
