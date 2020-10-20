import React from 'react';
import styled from 'styled-components';

import Container from '../ui/templates/container/Container';
import Gradient from '../images/gredient.png';

const GradientImage = styled.img`
`;
const BackgroundImageContainer = styled.div`  
    overflow: hidden;
    position: absolute;
    max-width: 100%;
    top: 0;
    left: 0;
    z-index: -3;
`


function App() {
  return (
    <>
      <BackgroundImageContainer>
        <GradientImage src={Gradient} />
      </BackgroundImageContainer>
      <Container />
    </>
  );
}

export default App;
