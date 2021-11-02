import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import { Post } from './hooks/usePost';

interface MainListItemProps {
  content: Post;
}

function MainListItem({ content }: MainListItemProps) {
  return (
    <Link to={content.slug}>
      <MainListItemTemplate>
        <TopBlock>
          <div className="title">{content.title}</div>
        </TopBlock>
        <BottomBlock>
          <div className="category">{content.category}</div>
          <div className="date">{content.date}</div>
        </BottomBlock>
      </MainListItemTemplate>
    </Link>
  );
}

const MainListItemTemplate = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.beforeWhite};
  margin-bottom: 5rem;
  cursor: pointer;
  padding: 1rem;
  border-left: 2px solid ${colors.beforeWhite};

  &:hover {
    font-weight: bold;
    color: ${colors.white};
  }
`;

const TopBlock = styled.div`
  cursor: pointer;
  padding-bottom: 2rem;

  .title {
    font-size: 1.5rem;
  }
`;

const BottomBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1rem;
  border-bottom: 1px solid;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export default MainListItem;
