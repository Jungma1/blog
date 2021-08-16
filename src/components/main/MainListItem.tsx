import React from 'react';
import styled from 'styled-components';
import { IPost } from './hooks/usePost';

interface MainListItemProps {
  content: IPost;
}

function MainListItem({ content }: MainListItemProps) {
  return (
    <MainListItemTemplate>
      <div>{content.title}</div>
      <div>{content.date}</div>
    </MainListItemTemplate>
  );
}

const MainListItemTemplate = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MainListItem;
