import React from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {WAVE_SCREEN} from '../../navigations/constants';

const SCREEN_NAME_LIST = [WAVE_SCREEN];

export default function MainScreen() {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Title>Main</Title>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        {SCREEN_NAME_LIST.map((s, i) => {
          return (
            <ScreenBox key={i} onPress={() => navigate(s)}>
              <ScreenTitle>{s} 👉</ScreenTitle>
            </ScreenBox>
          );
        })}
      </ScrollView>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #000;
`;

const ScreenList = styled.ScrollView``;

const ScreenBox = styled.Pressable`
  margin-vertical: 16px;
  padding: 16px;
`;

const ScreenTitle = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;
