import React from 'react';
import {Text, View} from 'react-native';

const Component = () => {
  return (
    <View testID="ShowdownScreen">
      <Text>Showdown</Text>
    </View>
  );
};

const ShowdownScreenOptions = {headerShown: false, title: ''};

export default class {
  static Component = Component;
  static Options = ShowdownScreenOptions;
}
