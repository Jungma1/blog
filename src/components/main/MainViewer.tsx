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

const MainListItemTemplate = styled(ResponsiveTemplate)`
  color: ${colors.white};
`;

export default MainViewer;
