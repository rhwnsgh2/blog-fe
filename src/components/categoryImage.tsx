import React from 'react';
import styled from 'styled-components';
import reactImage from '../assets/logo192.png';

const CategoryImage = () => {
  return (
    <ImageWrapper>
      <CenterWrapper>
        <Image src={reactImage} />
        <TextWrapper>React</TextWrapper>
      </CenterWrapper>
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  display: flex;
  height: 300px;
  background-color: #282c34;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  top: 80px;
  width: 35%;
  height: 35%;
  object-fit: scale-down;
`;

const TextWrapper = styled.div`
  font-size: 96px;
  font-weight: 700;
  color: #61dafb;
  margin-left: 27px;
  margin-top: 15px;
`;

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default CategoryImage;
