import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import { Post } from '../../hooks/usePost';
import { navigate } from 'gatsby-link';
import Tags from './Tags';

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
        <div className='date'>{content.date}</div>
        <Tags tags={content.tags} />
      </BottomBlock>
    </MainListItemTemplate>
  );
}

const MainListItemTemplate = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.lightWhite};
  cursor: pointer;
  padding: 1rem;
  font-weight: bold;
  margin-bottom: 4rem;
  border-bottom: 0.125rem solid;

  :hover {
    transform: translateY(-15px);
    color: ${colors.white};
    transition: color 0.5s, transform 0.5s;
  }

  :not(:hover) {
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
  padding-left: 1rem;
  padding-right: 1rem;

  .date {
    margin-bottom: 0.75rem;
  }
`;

export default MainListItem;
