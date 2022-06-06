import React from 'react';
import CategoryImage from '../components/categoryImage';
import Contents from '../components/contents';
import Header from '../components/header';
import PageWrapper from '../components/pageWrapper';

export const ReactPage = () => {
  return (
    <PageWrapper>
      <Header />
      <CategoryImage />
      <Contents />
    </PageWrapper>
  );
};
