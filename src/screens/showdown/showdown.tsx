import React from 'react';
import {View} from 'react-native';
import {IconButton, List} from 'react-native-paper';
import {Card, Cards} from './components';
import useShowdown from './hooks';

const Component = () => {
  const {
    props: {terrains, encounter},
    actions: {terrainPreview, terrainDraw, encounterRemove},
  } = useShowdown();

  return (
    <View testID="ShowdownScreen">
      <List.Item
        title={encounter?.name}
        right={(itemProps) => (
          <>
            <IconButton
              {...itemProps}
              icon="refresh"
              onPress={encounterRemove}
            />
          </>
        )}
      />

      <List.Item
        title="Terrains"
        right={(itemProps) => (
          <>
            <IconButton {...itemProps} icon="refresh" onPress={terrainDraw} />
          </>
        )}
      />
      <Cards horizontal showsHorizontalScrollIndicator={false}>
        {terrains?.map((terrain) => (
          <Card
            key={terrain.id}
            data={terrain}
            onPress={() => terrainPreview(terrain.id)}
          />
        ))}
      </Cards>
    </View>
  );
};

const ShowdownScreenOptions = {headerShown: false, title: ''};

export default class {
  static Component = Component;
  static Options = ShowdownScreenOptions;
}
