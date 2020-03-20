import React, { Component } from 'react';
import styled from 'styled-components';

import img3 from '../../components/Images/cosmetic-shop-01.jpg';
import { Header, Title, Text, Results } from '../../components/Layout';
import Autocomplete from '../../components/Autocomplete';

const AutocompleteWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

class Ingredient extends Component {
  state = { val: '' };

  render() {
    return (
      <div>
        <Header img={img3}>
          <div>
            <Title>Find Ingredient</Title>
            <Text>
              Start typing ingredient your are interested in and check out!
            </Text>
          </div>
          <AutocompleteWrapper>
            <Autocomplete
              suggestions={[
                'Sodium Lauryl Sulphate',
                'Sodium Lauryl Ether Sulphate',
                'Sodium Borate',
                'Tetrasodium EDTA',
                'Trisodium EDTA',
                'Glycolic Acid',
              ]}
            />
          </AutocompleteWrapper>
        </Header>
        <Results>Tu beda wyniki... beda beda!</Results>
      </div>
    );
  }
}

export default Ingredient;
