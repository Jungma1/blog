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
      <LeftBlock>
        <div className="title">{content.title}</div>
        <div className="date">{content.date}</div>
      </LeftBlock>
      <RightBlock>{content.summary}</RightBlock>
    </MainListItemTemplate>
  );
}

const MainListItemTemplate = styled.div`
  display: flex;
  color: ${colors.white};
  margin-bottom: 5rem;
`;

const LeftBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 1rem;
  border-right: 2px solid;

  .title {
    font-size: 1.5rem;
  }
`;

const RightBlock = styled.div`
  flex: 2;
  padding-left: 1rem;
  font-size: 1.4rem;
  align-self: center;
`;

export default MainListItem;
