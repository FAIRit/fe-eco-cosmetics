import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import About from './Content/About';
import Ingredient from './Content/Ingredient';
import AnalyzeInci from './Content/AnalyzeInci';
import Products from './Content/Products';

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
        <Route exact path='/' component={Ingredient} />
        <Route path='/about' component={About} />
        <Route path='/analyzeinci' component={AnalyzeInci} />
        <Route path='/products' component={Products} />
      </Switch>
    </ContentWrapper>
  );
};

export default Content;