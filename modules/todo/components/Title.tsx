import React from 'react';
import { View } from 'react-native';
import { Text } from 'tamagui';

import { GlobalStyles } from 'assets/styles';

const TitleStyle = {
  wrapper: {
    ...GlobalStyles.flexSpaceBetween,
    alignItems: 'center',
  },
  screenTitle: {
    color: 'white',
    fontSize: 24,
  },
  date: {
    color: 'white',
    fontSize: 16,
  },
};

const Title = (): JSX.Element => {
  return (
    <View style={TitleStyle.wrapper as any}>
      <Text style={TitleStyle.screenTitle}>To-Do.</Text>
      <Text style={TitleStyle.date}>
        {new Date().toISOString().split('T')[0]}
      </Text>
    </View>
  );
};

export default Title;
