import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import { ResponsiveTemplate } from '../common/Responsive';

interface MainListItemProps {
  frontmatter: {
    date: string;
    title: string;
    summary: string;
    category: string;
    tag: string;
  };
  html: any;
}

function MainListItem({ frontmatter, html }: MainListItemProps) {
  return <MainListItemTemplate>{frontmatter.title}</MainListItemTemplate>;
}

const MainListItemTemplate = styled(ResponsiveTemplate)`
  color: ${colors.white};
`;

export default MainListItem;
