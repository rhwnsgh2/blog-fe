import React from 'react';
import styled from 'styled-components';
import MainBody from '../components/MainBody';
import Header from '../components/header';
import mainPage from '../assets/mainPage.png';
import PageWrapper from '../components/pageWrapper';

const MainPage = () => {
  return (
    <PageWrapper>
      <Header />
      <MainBody />
    </PageWrapper>
  );
};

export default MainPage;
