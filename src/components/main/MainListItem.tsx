import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';

const MainListItemTemplate = styled.div`
  color: ${colors.white};
`;

function MainListItem() {
  return (
    <MainListItemTemplate>
      hello
    </MainListItemTemplate>
  );
}

export default MainListItem;
