import React from 'react';
import { createGlobalStyle } from 'styled-components';
import colors from '../../lib/styles/colors';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <GlobalStyled />
      {children}
    </React.Fragment>
  );
}

const GlobalStyled = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 5000px;
    background: ${colors.background};
    font-family: 'Roboto';
    margin: 0;
    padding: 0;
  }

  a, a:link, a:visited, a:hover, a:focus {
		text-decoration: none;
		color: unset;
	}
`;

export default Layout;
