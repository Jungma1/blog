import React from 'react';
import styled from 'styled-components';
import media from '../../lib/styles/media';

type ResponsiveProps = {
  children: React.ReactNode;
};

function Responsive({ children }: ResponsiveProps) {
  return <ResponsiveTemplate>{children}</ResponsiveTemplate>;
}

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
    width: 315px;
  }
`;


export default Responsive;
