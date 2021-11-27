import React from 'react';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';
import Responsive from '../components/common/Responsive';
import Main from '../components/main/Main';

function MainPage() {
  return (
    <Layout>
      <Responsive>
        <Header />
        <Main />
      </Responsive>
    </Layout>
  );
}

export default MainPage;
