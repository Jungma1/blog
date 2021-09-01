import React from 'react'
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import media from '../../lib/styles/media';
import useHeader, { IScroll } from './hooks/useHeader';

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
  position: ${(props: IScroll) => (props.scrollY < 410) ? '' : 'fixed'};
  top: ${(props: IScroll) => (props.scrollY < 410) ? 0 : '190px'};
  color: ${colors.white};
  padding: 2rem;

  ${media.medium} {
    opacity: 0;
  }
`;

export default NavBar
