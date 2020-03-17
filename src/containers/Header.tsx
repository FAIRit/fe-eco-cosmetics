import React from 'react';
import styled from 'styled-components';

import HeaderLink, { NavigationLink } from '../components/HeaderLink';

export interface HeaderProps {
  logoName: string;
  links: NavigationLink[];
}

const HeaderWrapper = styled.div`
  order: 1;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0 0 25px rgba(7, 51, 84, 0.17);
`;

const HeaderLogo = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin-left: 5%;
  cursor: pointer;
`;

const ListStyle = styled.ul`
  list-style: none;
  margin-right: 5%;
`;

const Header: React.FC<HeaderProps> = ({ logoName, links }) => {
  return (
    <HeaderWrapper>
      <HeaderLogo>{logoName}</HeaderLogo>
      <ListStyle>
        {links &&
          links.map((link: NavigationLink) => (
            <HeaderLink linkName={link.linkName} linkRoute={link.linkRoute} key={link.linkName} />
          ))}
      </ListStyle>
    </HeaderWrapper>
  );
};

export default Header;
