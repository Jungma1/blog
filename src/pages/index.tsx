import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';
import Project from '../components/project/Project';

function MainPage() {
  return (
    <Layout>
      <Helmet title="JUNGMA BLOG" />
      <Header />
      <Project />
    </Layout>
  );
}

export default MainPage;
