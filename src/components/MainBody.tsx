import React from 'react';
import styled, { keyframes } from 'styled-components';
import mainPage from '../assets/mainPage.png';

const MainBody = () => {
  return (
    <MainBodyWrapper>
      <SelectCategoryWrapper>
        {'<'} React {'>'}
      </SelectCategoryWrapper>
    </MainBodyWrapper>
  );
};
const hue = keyframes`
    0% {
      background-color : yellow;
    }
    50% {
      background-color : blue;
    }
    100%{
        background-color: violet;
    }
`;
const SelectCategoryWrapper = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  font-weight: 700;
  font-size: 32px;
  transform: translate(-50%, -50%);
  &:hover {
    animation: ${hue} 10s infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: ${hue} 5s infinite linear;
  }
`;
const MainBodyWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 0;
  padding-top: 66.64%;
  background-image: url(${mainPage});
  background-size: cover;
  z-index: 1000;
  top: -200px;
`;

export default MainBody;
