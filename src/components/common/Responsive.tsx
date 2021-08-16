import React from 'react';
import styled from 'styled-components';
import media from '../../lib/styles/media';

export const ResponsiveTemplate = styled.div`
  width: 1024px;
  margin-left: auto;
  margin-right: auto;

  ${media.medium} {
    width: 768px;
  }
  ${media.small} {
    width: 375px;
  }
  ${media.xsmall} {
    width: 320px;
  }
`;

type ResponsiveProps = {
  children: React.ReactNode;
};

function Responsive({ children }: ResponsiveProps) {
  return <ResponsiveTemplate>{children}</ResponsiveTemplate>;
}

export default Responsive;
