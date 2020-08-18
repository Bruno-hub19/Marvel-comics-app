import React, { useRef, useCallback } from 'react';
import { Image } from 'react-native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import { api } from '../../../services/api';
import { Input } from '../../../components/Input';
import marvelLogo from '../../../assets/marvel-logo.png';

import {
  Container,
  Title,
  SubTitle,
  FindButton,
  FindButtonText,
} from './styles';

interface FormData {
  hero_name: string;
}

const FindHero: React.FC = ({ navigation }: any) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: FormData, { reset }) => {
      try {
        const response = await api.get('/characters', {
          params: {
            name: data.hero_name,
            ts: '1',
            apikey: '374d072e930a8a8d1e11aa1ef651c693',
            hash: '5ca7dfe0900ced627d239fa684227b4a',
          },
        });

        const dataForm = response.data;

        navigation.navigate('ComicsScreen', {
          hero_id: dataForm.data.results[0].id,
        });

        reset();
      } catch (err) {
        console.log('[REQUEST_ERROR]: ', err);
      }
    },
    [navigation],
  );

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
