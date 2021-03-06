import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  order: 3;
  font-size: 1rem;
  height: 2.5rem;
  background-color: #1b213d;
`;

const Footer: React.FC = () => {
  return <FooterWrapper>Footer</FooterWrapper>;
};

export default Footer;
