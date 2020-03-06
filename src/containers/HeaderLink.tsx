import React from 'react';

import styled from "styled-components";

export interface NavLink {
  linkName: string;
};

const LinkStyle = styled.li`
    display: inline-block;
    padding: 0 12px;
    font-size: 1rem;
    color: #20292f;
    cursor: pointer;

    &:hover {
        color: #71818c;
      }
`

const HeaderLink: React.FC<NavLink> = ({ linkName }) => {
   return (
        <LinkStyle className="nav-link">{linkName}</LinkStyle>
   )
} 

export default HeaderLink;