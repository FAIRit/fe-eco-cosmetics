import React from "react";
import styled from "styled-components";

import HeaderLink, { NavLink } from "./HeaderLink";

export interface HeaderProps {
  logoName: string;
  links: NavLink[];
}

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0 0 25px rgba(7, 51, 84, 0.17);
`;

const HeaderLogo = styled.div`
  font-size: 2rem;
  font-weight: 600;
  padding-left: 40px;
`;

const ListStyle = styled.ul`
  list-style: none;
  padding-right: 40px;
`;

const Header: React.FC<HeaderProps> = ({ logoName, links }) => {
  return (
    <HeaderWrapper>
      <HeaderLogo>{logoName}</HeaderLogo>
      <ListStyle>
        {links &&
          links.map((link: NavLink) => (
            <HeaderLink linkName={link.linkName} key={link.linkName} />
          ))}
      </ListStyle>
    </HeaderWrapper>
  );
};

export default Header;
