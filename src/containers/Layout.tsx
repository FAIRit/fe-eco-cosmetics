import React from 'react';
import styled from 'styled-components';

import Header, { HeaderProps } from './Header';
import Footer from './Footer';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
  color: #666;
`;

const ContentWrapper = styled.div`
  flex: 1;
  background-color: #fcfbf8;
  height: 100vh;
`;

interface PageTemplateProps {
  children: any;
}

const headerProps: HeaderProps = {
  logoName: 'eCosmetics',
  links: [
    {
      linkName: 'About',
      // TODO: Add routes
    },
    {
      linkName: 'Ingridient',
    },
    {
      linkName: 'Analyze INCI',
    },
    {
      linkName: 'Products',
    },
  ],
};

const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header logoName={headerProps.logoName} links={headerProps.links} />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

export default PageTemplate;
