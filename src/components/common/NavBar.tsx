import React from 'react'
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import useHeader, { IScroll } from './hooks/useHeader';

function NavBar() {
  const { scrollY } = useHeader();

  return (
    <NavBarTemplate scrollY={scrollY}>
      nav
    </NavBarTemplate>
  )
}

const NavBarTemplate = styled.div`
  position: ${(props: IScroll) => (props.scrollY < 410) ? '' : 'fixed'};
  top: ${(props: IScroll) => (props.scrollY < 410) ? 0 : '190px'};
  color: ${colors.white};
`;

export default NavBar
