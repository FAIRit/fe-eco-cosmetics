import React from "react";
import styled from "styled-components";

export interface NavLink {
  linkName: string;
}

const LinkStyle = styled.li`
  display: inline-block;
  padding: 0 12px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: #71818c;
  }
`;

const HeaderLink: React.FC<NavLink> = ({ linkName }) => {
  return <LinkStyle>{linkName}</LinkStyle>;
};

export default HeaderLink;
