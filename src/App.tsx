import React from 'react';
import styled from 'styled-components';

import Header, { HeaderProps } from './containers/Header';
import Content from './containers/Content'
import Footer from './containers/Footer';
import { ROUTES } from './components/routes';

const Wrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #666;
  display: flex;
  flex-direction: column;
`;

const headerProps: HeaderProps = {
  logoName: 'eCosmetics',
  links: [
    {
      linkName: 'About',
      linkRoute: ROUTES.about,
    },
    {
      linkName: 'Ingredient',
      linkRoute: ROUTES.ingredient,
    },
    {
      linkName: 'Analyze INCI',
      linkRoute: ROUTES.analyzeInci,
    },
    {
      linkName: 'Products',
      linkRoute: ROUTES.productList,
    },
  ],
};

const App: React.FC = () => {
  return (
    <Wrapper>
      <Header logoName={headerProps.logoName} links={headerProps.links} />
      <Content />
      <Footer />
    </Wrapper>
  );
};

export default App;
