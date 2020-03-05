import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #e8d8be;
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <p>Header</p>
    </HeaderWrapper>
  );
};

export default Header;