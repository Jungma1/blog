import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';
import Main from '../components/main/Main';

function MainPage() {
  return (
    <Layout>
      <Helmet title="JUNGMA BLOG" />
      <Header />
      <Main />
    </Layout>
  );
}

export default MainPage;
