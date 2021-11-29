import React from 'react';
import styled from 'styled-components';
import NavBar from '../common/NavBar';
import Responsive from '../common/Responsive';
import usePost, { Post } from './hooks/usePost';
import MainListItem from './MainListItem';

function MainList() {
  const { contents } = usePost();

  return (
    <Responsive>
      <Block>
        <NavBar />
      </Block>
      <MainListTemplate>
        {contents.map((content: Post) => (
          <MainListItem key={content.title} content={content} />
        ))}
      </MainListTemplate>
    </Responsive>
  );
}

const Block = styled.div`
  margin-top: 1rem;
  position: relative;
`;

const MainListTemplate = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 0.5s;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

export default MainList;
