import React from 'react';
import styled from 'styled-components';
import { ResponsiveTemplate } from '../common/Responsive';
import usePost, { IPost } from './hooks/usePost';
import MainListItem from './MainListItem';

function MainList() {
  const { contents } = usePost();

  return (
    <MainListTemplate>
      {contents.map((content: IPost) => (
        <MainListItem key={content.index} content={content} />
      ))}
    </MainListTemplate>
  );
}

const MainListTemplate = styled(ResponsiveTemplate)`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  display: block;
  padding-top: 5rem;
  padding-bottom: 5rem;
  animation: fadeIn 0.5s;
`;

export default MainList;
