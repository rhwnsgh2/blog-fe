import React from 'react';
import styled from 'styled-components';

const Content = () => {
  return (
    <ContentWrapper>
      <Title category={'[React]'} title={'리액트 종류가 많나요?'} />
    </ContentWrapper>
  );
};

interface TitleProps {
  category: string;
  title: string;
}
const Title = (props: TitleProps) => {
  return (
    <ContentTitleWrapper>
      <TitleImage />
      <TitleWrapper>
        <TitleText>{props.category}</TitleText>
        <TitleText>{props.title}</TitleText>
      </TitleWrapper>
    </ContentTitleWrapper>
  );
};
const ContentWrapper = styled.div`
  background-color: #f0f0f0;
  border-radius: 35px;

  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const ContentTitleWrapper = styled.div`
  width: 284px;
  height: 63px;
  border-radius: 50px;
  background-color: white;
  margin-top: 9px;
  margin-right: 8px;
  margin-left: 8px;
`;

const TitleWrapper = styled.div`
  width: 186px;
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.div`
  font-weight: 700px;
  font-size: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const TitleImage = styled.div`
  background-color: #ed4739;
  width: 63px;
  height: 63px;
  border-radius: 50%;
`;
export default Content;
