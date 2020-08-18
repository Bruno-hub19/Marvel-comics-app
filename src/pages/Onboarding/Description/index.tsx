import React from 'react';
import { Image } from 'react-native';

import marvelBack1 from '../../../assets/marvel-background-1.png';

import {
  Container,
  DescriptionContainer,
  DescriptionText,
  NextButton,
  NextButtonText,
} from './styles';

const Description: React.FC = ({ navigation }: any) => {
  return (
    <Container>
      <Image
        source={marvelBack1}
        style={{ resizeMode: 'cover', flex: 1, position: 'absolute' }}
      />

      <DescriptionContainer>
        <DescriptionText>Discover your favorites heroes of MCU</DescriptionText>

        <NextButton onPress={() => navigation.navigate('FindHero')}>
          <NextButtonText>next</NextButtonText>
        </NextButton>
      </DescriptionContainer>
    </Container>
  );
};

export { Description };
