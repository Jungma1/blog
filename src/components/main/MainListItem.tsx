import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import { IPost } from './hooks/usePost';

interface MainListItemProps {
  content: IPost;
}

function MainListItem({ content }: MainListItemProps) {
  return (
    <Link to={content.slug}>
      <MainListItemTemplate>
        <TopBlock>
          <div className="title">{content.title}</div>
          <div className="date">{content.date}</div>
        </TopBlock>
        <BottomBlock>
          <div className="summary">{content.summary}</div>
        </BottomBlock>
      </MainListItemTemplate>
    </Link>
  );
}

const MainListItemTemplate = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.white};
  margin-bottom: 5rem;
  cursor: pointer;
  padding: 1rem;
  border-left: 2px solid ${colors.white};

  &:hover {
    color: ${colors.whiteToggle};
  }
`;

const TopBlock = styled.div`
  cursor: pointer;
  padding-bottom: 2rem;

  .title {
    font-size: 1.5rem;
  }

  .date {
    text-align: right;
  }
`;

const BottomBlock = styled.div`
  font-size: 1.4rem;
  border-bottom: 1px solid;
`;

export default MainListItem;
