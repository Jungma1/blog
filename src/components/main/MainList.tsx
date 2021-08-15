import React from 'react';
import styled from 'styled-components';
import { ResponsiveTemplate } from '../common/Responsive';
import MainListItem from './MainListItem';

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

function MainList() {
  return (
    <MainListTemplate>
      <MainListItem />
    </MainListTemplate>
  );
}

export default MainList;
