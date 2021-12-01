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
          {content.tag.map(value => (
            <Tag key={value}>{value}</Tag>
          ))}
        </div>
      </BottomBlock>
    </MainListItemTemplate>
  );
}

const MainListItemTemplate = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.beforeWhite};
  cursor: pointer;
  padding: 1rem;
  font-weight: bold;
  margin-bottom: 4rem;
  border-bottom: 0.125rem solid;

  :hover {
    transform: translateX(-15px);
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
  flex-direction: row;
  justify-content: space-between;
  font-size: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;

  div {
    margin-bottom: 0.25rem;
  }
`;

const Tag = styled.span`
  margin-left: 1rem;
`;

export default MainListItem;
