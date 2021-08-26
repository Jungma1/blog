import React from 'react';
import styled from 'styled-components';
import { ResponsiveTemplate } from '../common/Responsive';
import usePost, { IPost } from './hooks/usePost';
import MainListItem from './MainListItem';

function MainList() {
  const { contents } = usePost();

  return (
    <MainListTemplate>
      <LeftFrame>
        {contents.map((content: IPost) => (
          <MainListItem key={content.index} content={content} />
        ))}
      </LeftFrame>
      <RightFrame>

      </RightFrame>
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

  display: flex;
  padding-top: 5rem;
  padding-bottom: 5rem;
  animation: fadeIn 0.5s;
`;

const LeftFrame = styled.div`
  flex: 3;
`;

const RightFrame = styled.nav`
  flex: 1;
  background-color: white;
`;

export default MainList;
