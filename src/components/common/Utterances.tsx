import React, { createRef, useLayoutEffect } from 'react';
import styled from 'styled-components';

function Utterances() {
  const ref = createRef<HTMLDivElement>();
  const src = 'https://utteranc.es/client.js';
  const repo = 'Jungma1/blog';
  const theme = 'photon-dark';

  useLayoutEffect(() => {
    const utterances = document.createElement('script');

    const attributes = {
      src,
      repo,
      theme,
      'issue-term': 'pathname',
      label: '💬 comments',
      crossOrigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    ref.current?.appendChild(utterances);
  }, []);

  return <UtterancesTemplate ref={ref} />;
}

const UtterancesTemplate = styled.div`
  margin-top: 5rem;

  .utterances {
    max-width: 100%;
  }
`;

export default Utterances;
