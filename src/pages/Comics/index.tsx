import React, { useState, useEffect } from 'react';
import { FlatList, Image } from 'react-native';

import marvelLogo from '../../assets/marvel-logo.png';
import { api } from '../../services/api';
import {
  Container,
  Header,
  Title,
  ComicCard,
  ComicContent,
  ComicName,
  IssueNumberText,
  ComicPrice,
} from './styles';

interface RouteProps {
  route: {
    params: {
      hero_id: string;
    };
  };
}

interface HeroComicsState {
  id: number;
  title: string;
  issueNumber: number;
  price: number;
  thumbnail: string;
}

type HeroComicsResponse = Omit<HeroComicsState, 'price'> & {
  prices: Array<{ price: number }>;
  thumbnail: { path: string };
};

const Comics: React.FC<RouteProps> = ({ route }) => {
  const [heroComics, setHeroComics] = useState<HeroComicsState[]>([]);

  useEffect(() => {
    api
      .get(`/characters/${route.params.hero_id}/comics`, {
        params: {
          ts: '1',
          apikey: '374d072e930a8a8d1e11aa1ef651c693',
          hash: '5ca7dfe0900ced627d239fa684227b4a',
        },
      })
      .then(response => {
        const { data } = response;

        const eachComic = data.data.results;

        const formattedComic = eachComic.map((each: HeroComicsResponse) => ({
          id: each.id,
          title: each.title,
          issueNumber: each.issueNumber,
          price: each.prices[0].price,
          thumbnail: each.thumbnail.path,
        }));

        setHeroComics(formattedComic);
      });
  }, [route.params.hero_id]);

  return (
    <Container>
      <Header>
        <Image source={marvelLogo} />

        <Title>List of your favorite hero's comics</Title>
      </Header>

      <FlatList
        data={heroComics}
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
        keyExtractor={comic => String(comic.id)}
        renderItem={({ item: comic }) => (
          <ComicCard>
            <Image
              source={{
                uri: `${comic.thumbnail}.jpg`,
              }}
              style={{ width: 100, height: 200, resizeMode: 'center' }}
            />

            <ComicContent>
              <ComicName>{comic.title}</ComicName>
              <IssueNumberText>IN: {comic.issueNumber}</IssueNumberText>
              <ComicPrice>${comic.price}</ComicPrice>
            </ComicContent>
          </ComicCard>
        )}
      />
    </Container>
  );
};

export { Comics };
