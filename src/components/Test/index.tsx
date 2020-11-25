import React from 'react';
import { View, Text } from 'react-native';

interface ITest {
  text?: string;
}

const Test: React.FC<ITest>  = ( { text }) => (
  <View>
    <Text>{text}</Text>
  </View>

);

export default Test;