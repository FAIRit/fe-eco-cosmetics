import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import About from './Content/About';
import Ingredient from './Content/Ingredient';
import AnalyzeInci from './Content/AnalyzeInci';
import Products from './Content/Products';
import { ROUTES } from '../components/routes';

const ContentWrapper = styled.div`
  order: 2;
  background-color: #fcfbf8;
  height: 100vh;
  padding-top: 4rem;
  padding-left: 10%;
  padding-right: 10%;
`;

const Content = () => {
  return (
    <ContentWrapper>
      <Switch>
        <Route exact path={ROUTES.ingredient} component={Ingredient} />
        <Route path={ROUTES.about} component={About} />
        <Route path={ROUTES.analyzeInci} component={AnalyzeInci} />
        <Route path={ROUTES.productList} component={Products} />
      </Switch>
    </ContentWrapper>
  );
};

export default Content;