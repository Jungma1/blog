import React from 'react';
import styled from 'styled-components';
import media from '../../lib/styles/media';
import NavBar from '../common/NavBar';
import { ResponsiveTemplate } from '../common/Responsive';
import usePost, { Post } from './hooks/usePost';
import MainListItem from './MainListItem';

function MainList() {
  const { contents } = usePost();

  return (
    <MainListTemplate>
      <LeftFrame>
        {contents.map((content: Post) => (
          <MainListItem key={content.index} content={content} />
        ))}
      </LeftFrame>
      <RightFrame>
        <NavBar />
      </RightFrame>
    </MainListTemplate>
  );
}

const MainListTemplate = styled(ResponsiveTemplate)`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  display: flex;
  padding-top: 5rem;
  padding-bottom: 5rem;
  padding-right: 1rem;
  padding-left: 1rem;
  animation: fadeIn 0.5s;
`;

const LeftFrame = styled.div`
  flex: 3;
`;

const RightFrame = styled.div`
  flex: 1;

  ${media.medium} {
    display: none;
  }
`;

export default MainList;
