import React from 'react'
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import useHeader, { Scroll } from './hooks/useHeader';

function NavBar() {
  const { scrollY } = useHeader();

  return (
    <NavBarTemplate scrollY={scrollY}>
      카테고리 <br />
      개발 <br />
      잡담 <br />
      이야기 <br />
      누리꾼 <br />
    </NavBarTemplate>
  )
}

const NavBarTemplate = styled.div`
  position: ${(props: Scroll) => (props.scrollY < 410) ? '' : 'fixed'};
  top: ${(props: Scroll) => (props.scrollY < 410) ? 0 : '190px'};
  color: ${colors.white};
  padding: 1rem;
`;

export default NavBar
