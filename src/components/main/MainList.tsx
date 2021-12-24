import React from 'react';
import styled from 'styled-components';
import { mediaQuery } from '../../lib/styles/media';
import NavBar from '../common/NavBar';
import Responsive from '../common/Responsive';
import usePost, { Post } from '../../hooks/usePost';
import MainListItem from './MainListItem';

function MainList() {
  const { contents } = usePost();

  return (
    <Responsive>
      <Block>
        {/* <NavBar /> */}
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

  ${mediaQuery(1439)} {
    display: none;
  }
`;

const MainListTemplate = styled.div`
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.3s;
  margin-top: 7rem;
  margin-bottom: 7rem;
`;

export default MainList;
