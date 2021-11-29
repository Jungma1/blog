import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import Responsive from '../common/Responsive';
import SideBar from '../common/SideBar';
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
        <Block>
          <SideBar />
        </Block>
        <ContentBlock dangerouslySetInnerHTML={{ __html: html }}></ContentBlock>
      </MainListItemTemplate>
    </Responsive>
  );
}

const Block = styled.div`
  position: relative;
  margin-top: 1rem;
`;

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
  font-weight: bold;

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

const ContentBlock = styled.div`
  font-size: 1.125rem;
`;

export default MainViewer;
