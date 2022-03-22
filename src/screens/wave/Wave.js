import React from 'react';
import Animated, {
  useDerivedValue,
  useAnimatedProps,
} from 'react-native-reanimated';
import Svg, {Path} from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const SIZE = 300;

export default function Wave({c1y, c2y}) {
  const data = useDerivedValue(() => ({
    from: {x: 0, y: 0.5},
    c1: {x: 1 / 3, y: c1y.value},
    c2: {x: 2 / 3, y: c2y.value},
    to: {x: 1, y: 0.5},
  }));

  const path = useAnimatedProps(() => {
    const {from, c1, c2, to} = data.value;

    return {
      d: [
        `M ${from.x} ${from.y}`,
        `C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${to.x} ${to.y}`,
        'V 1',
        'H 0',
      ].join(' '),
    };
  });

  return (
    <Svg style={{width: SIZE, height: SIZE}} viewBox="0 0 1 1">
      <AnimatedPath fill="#1F5E9D" animatedProps={path} />
    </Svg>
  );
}
