import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import { Post } from './hooks/usePost';
import { navigate } from 'gatsby-link';

interface MainListItemProps {
  content: Post;
}

function MainListItem({ content }: MainListItemProps) {
  return (
    <MainListItemTemplate onClick={() => navigate(content.slug)}>
      <TopBlock>
        <div>{content.title}</div>
      </TopBlock>
      <BottomBlock>
        <div>{content.date}</div>
        <div>
          <span>React</span>
          <span>Typescript</span>
        </div>
      </BottomBlock>
    </MainListItemTemplate>
  );
}

const MainListItemTemplate = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.beforeWhite};
  margin-bottom: 5rem;
  cursor: pointer;
  padding: 1rem;
  font-weight: bold;

  :hover {
    transform: translateX(10px);
    color: ${colors.white};
    transition: color 0.5s, transform 0.5s;
  }

  :not(:hover) {
    transition: color 0.5s;
    transition: color 0.5s, transform 0.5s;
  }
`;

const TopBlock = styled.div`
  cursor: pointer;
  padding-bottom: 2rem;

  div {
    font-size: 1.5rem;
  }
`;

const BottomBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;
  border-bottom: 1px solid;
  padding-left: 1rem;
  padding-right: 1rem;

  div {
    margin-bottom: 0.25rem;
  }

  span {
    padding: 0.125rem;
    margin-right: 1rem;
  }
`;

export default MainListItem;
