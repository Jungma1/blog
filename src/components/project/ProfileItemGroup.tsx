import React from 'react';
import styled from 'styled-components';

function ProfileItemGroup() {
  return (
    <Block>
      <ImageBlock
        src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"
        alt="node"
      />
      <ImageBlock
        src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"
        alt="typescript"
      />
      <ImageBlock
        src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB&color=gray"
        alt="react"
      />
    </Block>
  );
}

const Block = styled.div``;

const ImageBlock = styled.img`
  margin-right: 0.5rem;
`;

export default ProfileItemGroup;
