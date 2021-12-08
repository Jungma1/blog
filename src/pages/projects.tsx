import React from 'react';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';
import Responsive from '../components/common/Responsive';
import Project from '../components/project/Project';

function ProjectsPage() {
  return (
    <Layout>
      <Header />
      <Project />
    </Layout>
  );
}

export default ProjectsPage;
