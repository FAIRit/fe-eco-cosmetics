import React from 'react';
import styled from 'styled-components';
import img3 from '../../components/Images/cosmetic-shop-01.jpg';
import { Header, Title, Text, Results } from '../../components/Layout';

const Input = styled.input`
  color: white;
  border-width: 10px;
  border-color: rgba(47, 56, 84, 0);
  border-radius: 60px;
  letter-spacing: 1px;
  font-size: 16px;
  text-transform: uppercase;
  background-color: #2f3854;
  padding: 0.3em 1em;
  width: 45%;
  margin: 1rem 0;
`;

const Ingredient = () => {
  return (
    <div>
      <Header img={img3}>
        <div>
          <Title>Find Ingredient</Title>
          <Text>
            Start typing ingredient your are interested in and check out!
          </Text>
        </div>
        <div>
          <Input type='text' placeholder='Start typing' />
        </div>
      </Header>
      <Results>tu bedzie komponent WYNIK WYSZUKIWANIA SKLADNIKA</Results>
    </div>
  );
};

export default Ingredient;
