import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import Responsive from '../common/Responsive';

function Profile() {
  return (
    <Responsive>
      <ProfileTemplate>
        <TopBlock>
          <StaticImage className="avatar" src="../../images/avatar.jpg" alt="avatar" />
        </TopBlock>
        <BottomBlock>
          <div>안녕하세요! 개발자 '민병준' 입니다!</div>
          <br />
          <div>끊임없이 변화하는 기술들에 관심이 많으며, 최신 트렌드에 맞춰 코딩하는 것을 좋아합니다!</div>
          <br />
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
        </BottomBlock>
      </ProfileTemplate>
    </Responsive>
  );
}

const ProfileTemplate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: fadeIn 0.3s;
  align-items: center;
  padding-top: 7rem;
  padding-bottom: 7rem;
`;

const TopBlock = styled.div`
  .avatar {
    margin-left: auto;
    margin-right: auto;
    background: ${colors.white};
    width: 200px;
    height: 200px;
    border-radius: 100%;
    z-index: 0;
  }
`;

const BottomBlock = styled.div`
  text-align: center;
  margin-top: 2rem;

  font-size: 1.125rem;
  font-weight: bold;
  color: ${colors.white};
`;

const ImageBlock = styled.img`
  padding-right: 0.5rem;
`;

export default Profile;
