import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const Wrapper = styled.div`
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex: 1;
  background-color: #fcfbf8;
`;

interface PageTemplateProps {
  children: any;
}

const PageTemplate: React.FC<PageTemplateProps> = ({children}) => {
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

export default PageTemplate;