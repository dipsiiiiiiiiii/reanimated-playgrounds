import React from 'react';
import {
  useSharedValue,
  withTiming,
  withRepeat,
  withDelay,
} from 'react-native-reanimated';
import styled from 'styled-components/native';
import Wave from './Wave';

export default function WaveScreen() {
  const c1y = useSharedValue(0.2);
  const c2y = useSharedValue(0.8);

  const handleWave = () => {
    c1y.value = withDelay(
      0,
      withRepeat(withTiming(0.8, {duration: 500}), -1, true),
    );

    c2y.value = withDelay(
      200,
      withRepeat(withTiming(0.2, {duration: 500}), -1, true),
    );
  };

  return (
    <Container>
      <Title>Wave</Title>
      <MoveBtn onPress={handleWave}>
        <MoveBtnTitle>🌊</MoveBtnTitle>
      </MoveBtn>
      <Wave c1y={c1y} c2y={c2y} />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
`;

const MoveBtn = styled.Pressable`
  margin-bottom: 40px;
`;

const MoveBtnTitle = styled.Text``;
