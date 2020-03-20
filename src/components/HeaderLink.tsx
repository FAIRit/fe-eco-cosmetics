import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export interface NavigationLink {
  linkName: string;
  linkRoute: string;
}

const LinkStyle = styled(NavLink)`
  display: inline-block;
  padding: 0 12px;
  font-size: 1rem;
  color: #666;
  text-decoration: none;

  &:hover {
    color: #71818c;
  }
`;

const HeaderLink: React.FC<NavigationLink> = ({ linkName, linkRoute }) => {
  return <LinkStyle to={linkRoute}>{linkName}</LinkStyle>;
};

export default HeaderLink;
