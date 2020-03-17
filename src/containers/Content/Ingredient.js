import React from 'react';
import styled from 'styled-components';
import img3 from '../../components/Images/cosmetic-shop-01.jpg';

const Header = styled.section`
  text-align: center;
  margin-top: 3rem;
  height: 80vh;
  padding-top: 3rem;
  background-image: url(${img3});
`;
const Title = styled.p`
  font-family: 'Yeseva One', cursive;
  font-size: 80px;
  color: #333;
  margin-bottom: 0;
`;
const Text = styled.p`
  color: rgba(47, 56, 84, 0.5);
  font-size: 22px;
  font-weight: bold;
`;
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
const Results = styled.section`
  height: 80vh;
  background-color: white;
  margin-top: 2rem;
  text-align: center;
`;
const Ingredient = () => {
  return (
    <div>
      <Header>
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
