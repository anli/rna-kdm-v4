import React from 'react';
import {View} from 'react-native';
import {IconButton, List} from 'react-native-paper';
import {Card, Cards} from './components';
import useShowdown from './hooks';

const Component = () => {
  const {
    props: {terrains},
    actions: {terrainPreview, terrainDraw},
  } = useShowdown();

  return (
    <View testID="ShowdownScreen">
      <List.Section>
        <List.Item
          title="Terrains"
          right={(itemProps) => (
            <>
              <IconButton
                testID="InnovationDrawButton"
                {...itemProps}
                icon="star"
                onPress={terrainDraw}
              />
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
      </List.Section>
    </View>
  );
};

const ShowdownScreenOptions = {headerShown: false, title: ''};

export default class {
  static Component = Component;
  static Options = ShowdownScreenOptions;
}
