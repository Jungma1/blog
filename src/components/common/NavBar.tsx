import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import useScroll, { Scroll } from './hooks/useScroll';

function NavBar() {
  const { scrollY } = useScroll();

  return (
    <Block>
      <NavBarTemplate scrollY={scrollY}>
        카테고리 <br />
        개발 <br />
        잡담 <br />
        이야기 <br />
        누리꾼 <br />
      </NavBarTemplate>
    </Block>
  );
}

const Block = styled.div`
  width: 240px;
  position: absolute;
  left: 100%;
  padding-top: 5rem;
`;

const NavBarTemplate = styled.div`
  color: ${colors.white};
  margin-left: 1rem;
  position: ${({ scrollY }: Scroll) => (scrollY >= 410 ? 'fixed' : '')};
  top: ${({ scrollY }: Scroll) => (scrollY >= 410 ? '210px' : '0px')};
`;

export default NavBar;
