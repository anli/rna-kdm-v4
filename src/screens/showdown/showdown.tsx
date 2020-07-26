import React from 'react';
import {View} from 'react-native';
import {IconButton, List} from 'react-native-paper';
import {Card, Cards, Stat, Stats} from './components';
import useShowdown from './hooks';

const Component = () => {
  const {
    props: {stats, terrains, encounter, quarry, aiDraws, aiActives, aiDiscards},
    actions: {
      terrainDraw,
      showdownClear,
      preview,
      statIncrease,
      statDecrease,
      aiDraw,
    },
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

      <Stats>
        {stats.map(({name, value}: {name: string; value: string}) => (
          <Stat
            key={name}
            name={name}
            value={value}
            onIncrease={statIncrease}
            onDecrease={statDecrease}
          />
        ))}
      </Stats>

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
          {aiActives.map((aiActive) => (
            <Card
              key={aiActive.id}
              data={aiActive}
              onPress={() => preview(aiActive.imageUrl)}
            />
          ))}
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

      <List.Item
        title={`AI Cards (${aiDraws.length})`}
        right={(itemProps) => (
          <>
            <IconButton {...itemProps} icon="star" onPress={aiDraw} />
          </>
        )}
      />
      <Cards horizontal showsHorizontalScrollIndicator={false}>
        {aiDiscards?.map((aiDiscard) => (
          <Card
            key={aiDiscard.id}
            data={aiDiscard}
            onPress={() => preview(aiDiscard.imageUrl)}
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
