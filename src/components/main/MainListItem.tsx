import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import { IPost } from './hooks/usePost';

interface MainListItemProps {
  content: IPost;
}

function MainListItem({ content }: MainListItemProps) {
  return (
    <MainListItemTemplate>
      <TitleBlock>
        <div className="title">{content.title}</div>
        <div className="date">{content.date}</div>
      </TitleBlock>
    </MainListItemTemplate>
  );
}

const MainListItemTemplate = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.white};
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .title {
    cursor: pointer;
    font-size: 2rem;
  }

  .date {
    
  }
`;

export default MainListItem;
