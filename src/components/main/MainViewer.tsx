import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import { ResponsiveTemplate } from '../common/Responsive';
import { IPost } from './hooks/usePost';

interface MainViewerProps {
  frontmatter: IPost;
  html: any;
}

function MainViewer({ frontmatter, html }: MainViewerProps) {
  return <MainListItemTemplate>{frontmatter.title}</MainListItemTemplate>;
}

const MainListItemTemplate = styled(ResponsiveTemplate)`
  color: ${colors.white};
`;

export default MainViewer;
