import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import Responsive from '../common/Responsive';
import { Post } from './hooks/usePost';

interface MainViewerProps {
  frontmatter: Post;
  html: any;
}

function MainViewer({ frontmatter, html }: MainViewerProps) {
  return (
    <Responsive>
      <MainListItemTemplate>
        <TitleBlock>
          <h1>{frontmatter.title}</h1>
          <div>
            <span>[ {frontmatter.category} ]</span>
            <span>{frontmatter.date}</span>
          </div>
        </TitleBlock>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </MainListItemTemplate>
    </Responsive>
  );
}

const MainListItemTemplate = styled.div`
  color: ${colors.white};
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const TitleBlock = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  border-bottom: 2px solid ${colors.white};

  h1 {
    margin: 0;
  }

  div {
    display: flex;
    justify-content: flex-start;
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: ${colors.beforeWhite};

    span {
      margin-right: 1rem;
    }
  }
`;

export default MainViewer;
