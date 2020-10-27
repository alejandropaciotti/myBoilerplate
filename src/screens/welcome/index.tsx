import React, {useState} from 'react';
import {View, Text} from 'react-native';

import Foo from 'components/Foo';

interface IWelcome {
  text?: string;
}

interface IWelcomeState {
  status: boolean;
}

const Welcome: React.FC<IWelcome> = ({text = 'WELCOME'}) => {
  const [status] = useState<IWelcomeState>({status: false});
  return (
    <View>
      <Text>{text}</Text>
      <Text>{status ? 'true' : 'false'}</Text>
      <Foo />
    </View>
  );
};

export default Welcome;

export const SumaDosValores = (a: number, b: number): number => {
  return a + b;
};
