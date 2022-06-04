import React from 'react';
import styled from 'styled-components';

const MainHeader = () => {
  return (
    <HeaderWrapper>
      <TitleWrapper>JH LABS</TitleWrapper>
    </HeaderWrapper>
  );
};

const TitleWrapper = styled.div`
  height: 44px;
  margin-left: 228px;
  position: absolute;

  font-weight: 700;
  text-align: center;
  line-height: 44px;
  font-size: 32px;

  overflow-x: visible;
`;

const HeaderWrapper = styled.div`
  position: absolute;
  height: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: white;
  z-index: 1001;
`;
export default MainHeader;
