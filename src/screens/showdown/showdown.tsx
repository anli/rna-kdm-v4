import React from 'react';
import {View} from 'react-native';
import {IconButton, List} from 'react-native-paper';
import {Card, Cards} from './components';
import useShowdown from './hooks';

const Component = () => {
  const {
    props: {terrains, encounter, quarry},
    actions: {terrainDraw, showdownClear, preview},
  } = useShowdown();

  return (
    <View testID="ShowdownScreen">
      {encounter && (
        <List.Item
          title={encounter.name}
          right={(itemProps) => (
            <>
              <IconButton
                {...itemProps}
                icon="refresh"
                onPress={showdownClear}
              />
            </>
          )}
        />
      )}

      {quarry && (
        <Cards horizontal showsHorizontalScrollIndicator={false}>
          <Card
            data={{name: 'Monster'}}
            onPress={() => preview(quarry.monsterCardImageUrl)}
          />
          <Card
            data={{name: 'Basic Action'}}
            onPress={() => preview(quarry.basicActionCardImageUrl)}
          />
        </Cards>
      )}

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
            onPress={() => preview(terrain.imageUrl)}
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
