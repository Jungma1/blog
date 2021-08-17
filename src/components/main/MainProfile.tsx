import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import media from '../../lib/styles/media';
import { ResponsiveTemplate } from '../common/Responsive';

function MainProfile() {
  return (
    <ProfileTemplate>
        <LeftBlock>
          <StaticImage
            className="avatar"
            src="../../images/avatar.jpg"
            alt="avatar"
          />
        </LeftBlock>
        <RightBlock>
          <div>안녕하세요! 프론트엔드 개발자 '민병준' 입니다!</div>
          <br />
          <div>
            끊임없이 변화하는 기술들에 관심이 많으며, 최신 트렌드에 맞춰
            코딩하는 것을 좋아합니다!
          </div>
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
        </RightBlock>
    </ProfileTemplate>
  );
}

const ProfileTemplate = styled(ResponsiveTemplate)`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${media.medium} {
    display: block;
  }

  display: flex;
  justify-content: center;
  animation: fadeIn 0.5s;
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const LeftBlock = styled.div`
  ${media.medium} {
    flex: none;
    margin-right: auto;
  }

  text-align: center;
  margin-right: 2rem;

  .avatar {
    margin-left: auto;
    margin-right: auto;
    background: ${colors.white};
    width: 200px;
    height: 200px;
    border-radius: 100%;
  }
`;

const RightBlock = styled.div`
  ${media.medium} {
    flex: none;
    text-align: center;
    margin-top: 2rem;
  }

  font-size: 1.125rem;
  font-weight: bold;
  color: ${colors.white};
`;

const ImageBlock = styled.img`
  padding-right: 0.5rem;
`;

export default MainProfile;
