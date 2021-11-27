import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import { Post } from './hooks/usePost';

interface MainViewerProps {
  frontmatter: Post;
  html: any;
}

function MainViewer({ frontmatter, html }: MainViewerProps) {
  return (
    <MainListItemTemplate>
      <div>{frontmatter.title}</div>
      <div>{frontmatter.summary}</div>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </MainListItemTemplate>
  );
}

const MainListItemTemplate = styled.div`
  color: ${colors.white};
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export default MainViewer;
