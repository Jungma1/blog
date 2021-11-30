import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import { AiFillHome as HomeIcon } from 'react-icons/ai';
import { BsFillShareFill as ShareIcon } from 'react-icons/bs';
import { navigate } from 'gatsby-link';
import useScroll, { Scroll } from './hooks/useScroll';

function SideBar() {
  const { scrollY } = useScroll();

  return (
    <SideBarTemplate>
      <SideBox scrollY={scrollY}>
        <div onClick={() => navigate('/')}>
          <HomeIcon size={32} />
        </div>
        <div onClick={() => navigator.clipboard.writeText(window.location.href)}>
          <ShareIcon size={32} />
        </div>
      </SideBox>
    </SideBarTemplate>
  );
}

const SideBarTemplate = styled.div`
  position: absolute;
  left: -10%;
`;

const SideBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.beforeWhite};
  border: 0.125rem solid ${colors.beforeWhite};
  border-radius: 2rem;
  padding: 0.5rem;
  position: ${({ scrollY }: Scroll) => (scrollY > 0 ? 'fixed' : '')};

  div {
    text-align: center;
    cursor: pointer;

    :hover {
      color: ${colors.whiteToggle};
      transition: color 0.5s;
    }
    
    :not(:hover) {
      transition: color 0.5s;
    }

    :nth-child(1) {
      margin-bottom: 1rem;
    }
  }
`;

export default SideBar;
