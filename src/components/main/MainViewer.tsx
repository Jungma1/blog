import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import { mediaQuery } from '../../lib/styles/media';
import Responsive from '../common/Responsive';
import SideBar from '../common/SideBar';
import Utterances from '../common/Utterances';
import { Post } from './hooks/usePost';
import Img from 'gatsby-image';

interface MainViewerProps {
  frontmatter: Post;
  html: any;
}

function MainViewer({ frontmatter, html }: MainViewerProps) {
  return (
    <Responsive>
      <MainViewerTemplate>
        <TitleBlock>
          <Img fluid={frontmatter.image.childImageSharp.fluid} imgStyle={{ objectFit: 'cover', height: '180px' }} />
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
        <Utterances />
      </MainViewerTemplate>
    </Responsive>
  );
}

const Block = styled.div`
  position: relative;
  margin-top: 1rem;

  ${mediaQuery(1439)} {
    display: none;
  }
`;

const MainViewerTemplate = styled.div`
  animation: fadeIn 0.3s;
  color: ${colors.white};
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const TitleBlock = styled.div`
  margin-bottom: 4rem;
  border-bottom: 2px solid ${colors.white};
  font-weight: bold;

  .gatsby-image-wrapper {
    height: 180px;
    padding: 0;
  }

  h1 {
    margin: 0;
    margin-top: 4rem;
  }

  div {
    display: flex;
    justify-content: flex-start;
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: ${colors.lightWhite};

    span {
      margin-right: 1rem;
    }
  }
`;

const ContentBlock = styled.div`
  font-size: 1.125rem;
`;

export default MainViewer;
