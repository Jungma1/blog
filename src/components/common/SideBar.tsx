import { navigate } from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';

function SideBar() {
  return (
    <SideBarTemplate>
      <div onClick={() => navigate('/')}>홈으로</div>
    </SideBarTemplate>
  );
}

const SideBarTemplate = styled.div`
  position: absolute;
  left: -10%;
  cursor: pointer;
`;

export default SideBar;
