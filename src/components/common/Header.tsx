import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import useScroll, { Scroll } from './hooks/useScroll';
import Responsive from './Responsive';

function Header() {
  const { scrollY, scrollActive } = useScroll();

  return (
    <Responsive>
      <Block>
        <HeaderTemplate scrollY={scrollY} scrollActive={scrollActive}>
          <TitleBlock>
            <Link to="/">JUNGMA'S BLOG</Link>
          </TitleBlock>
          <NavBlock>
            <div>
              <Link to="/" activeClassName="active">
                Main
              </Link>
            </div>
            <div>
              <Link to="/projects" activeClassName="active">
                Projects
              </Link>
            </div>
            <div>
              <a href="https://github.com/jungma1">Github</a>
            </div>
          </NavBlock>
        </HeaderTemplate>
      </Block>
    </Responsive>
  );
}

const Block = styled.div`
  display: flex;
  justify-content: center;
  height: 10rem;
`;

const HeaderTemplate = styled.div`
  z-index: 1;
  position: fixed;
  width: 100%;
  top: 0;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: ${colors.white};
  background: ${colors.background};
  opacity: ${(props: Scroll) => (props.scrollActive ? 0 : 1)};
  transition: opacity 0.5s;
`;

const TitleBlock = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  justify-content: center;
  cursor: pointer;
`;

const NavBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  font-size: 1rem;

  div {
    margin-left: 1rem;
    margin-right: 1rem;
    cursor: pointer;

    &:hover {
      color: ${colors.whiteToggle};
    }

    .active {
      color: ${colors.whiteToggle};
    }
  }
`;

export default Header;
