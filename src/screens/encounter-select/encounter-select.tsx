import React from 'react';
import {View} from 'react-native';
import {List} from 'react-native-paper';
import useEncounterSelect from './hooks';

const Component = () => {
  const {
    props: {encounters},
    actions: {select},
  } = useEncounterSelect();

  return (
    <View testID="EncounterSelectScreen">
      {encounters.map((encounter) => (
        <List.Item
          key={encounter.id}
          title={encounter.name}
          onPress={() => select(encounter.id)}
        />
      ))}
    </View>
  );
};

const EncounterSelectScreenOptions = {headerShown: false, title: ''};

export default class {
  static Component = Component;
  static Options = EncounterSelectScreenOptions;
}
