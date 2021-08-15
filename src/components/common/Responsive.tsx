import React from 'react';
import styled from 'styled-components';
import media from '../../lib/styles/media';

export const ResponsiveTemplate = styled.div`
  width: 1440px;
  margin-left: auto;
  margin-right: auto;

  ${media.xxlarge} {
    width: 1440px;
  }
  ${media.xlarge} {
    width: 1024px;
  }
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
