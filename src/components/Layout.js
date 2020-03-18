import styled from 'styled-components';

export const Header = styled.section`
  text-align: center;
  margin-top: 3rem;
  height: 80vh;
  padding-top: 3rem;
  background-image: url(${(props) => props.img});
`;

export const Title = styled.p`
  font-family: 'Yeseva One', cursive;
  font-size: 80px;
  color: #333;
  margin-bottom: 0;
`;

export const Text = styled.p`
  color: rgba(47, 56, 84, 0.5);
  font-size: 22px;
  font-weight: bold;
`;

export const Results = styled.section`
  height: 80vh;
  background-color: white;
  margin-top: 2rem;
  text-align: center;
`;
