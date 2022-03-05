import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import Responsive from '../common/Responsive';
import ProfileItemGroup from './ProfileItemGroup';
import media from '../../lib/styles/media';

function Profile() {
  return (
    <Responsive>
      <ProfileTemplate>
        {/* <TopBlock>
          <StaticImage className="avatar" src={`../../images/avatar.jpg`} alt="avatar" />
        </TopBlock> */}
        <BottomBlock>
          <div className="title">안녕하세요 👋</div>
          <div className="sub">
            <p>
              프론트엔드 개발자 <span>'민병준'</span> 입니다!
            </p>
            <p>끊임없이 변화하는 기술들에 관심이 많으며, 최신 트렌드에 맞춰 코딩하는 것을 좋아합니다!</p>
          </div>
          <ProfileItemGroup />
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
  padding-top: 8rem;
  padding-bottom: 8rem;

  ${media.small} {
    align-items: center;
  }
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
  font-size: 1.125rem;
  font-weight: bold;
  color: ${colors.white};

  .title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .sub {
    span {
      color: ${colors.whiteToggle};
    }
  }
`;

export default Profile;
