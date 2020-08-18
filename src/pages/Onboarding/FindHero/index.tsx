import React, { useRef, useCallback } from 'react';
import { Image } from 'react-native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import { Input } from '../../../components/Input';
import marvelLogo from '../../../assets/marvel-logo.png';

import {
  Container,
  Title,
  SubTitle,
  FindButton,
  FindButtonText,
} from './styles';

const FindHero: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data, { reset }) => {
    // console.log(data);

    reset();
  }, []);

  return (
    <Container>
      <Image source={marvelLogo} />

      <Title>Find out your favorite hero</Title>
      <SubTitle>Don't worry, you can change it at any time :)</SubTitle>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="hero_name"
          placeholder="Name of your favorite hero"
          onSubmitEditing={() => formRef.current?.submitForm()}
        />
      </Form>

      <FindButton onPress={() => formRef.current?.submitForm()}>
        <FindButtonText>Find hero</FindButtonText>
      </FindButton>
    </Container>
  );
};

export { FindHero };
