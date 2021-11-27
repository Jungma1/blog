import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import { ResponsiveTemplate } from '../common/Responsive';
import { Post } from './hooks/usePost';

interface MainViewerProps {
  frontmatter: Post;
  html: any;
}

function MainViewer({ frontmatter, html }: MainViewerProps) {
  return (
    <MainListItemTemplate>
      {frontmatter.title}
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
