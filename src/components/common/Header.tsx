import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import useHeader, { IScroll } from './hooks/useHeader';
import { ResponsiveTemplate } from './Responsive';

function Header() {
  const { scrollY, scrollActive } = useHeader();

  return (
    <Block>
      <HeaderTemplate scrollY={scrollY} scrollActive={scrollActive}>
        <div className="header">
          <Link to="/">JUNGMA'S BLOG</Link>
        </div>
        <div className="nav">
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
        </div>
      </HeaderTemplate>
    </Block>
  );
}

const Block = styled.header`
  display: flex;
  justify-content: center;
  height: 10rem;
`;

const HeaderTemplate = styled(ResponsiveTemplate)`
  position: fixed;
  top: 0;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: ${colors.white};
  background: ${colors.background};
  border-bottom: 3px solid ${colors.white};
  opacity: ${(props: IScroll) => (props.scrollActive ? 0 : 1)};
  transition: opacity 0.5s;

  .header {
    display: flex;
    font-size: 2rem;
    font-weight: bold;
    justify-content: center;
    cursor: pointer;
  }

  .nav {
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
  }
`;

export default Header;
