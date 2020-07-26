import React from 'react';
import {View} from 'react-native';
import {IconButton, List} from 'react-native-paper';
import {Card, Cards, Stat, Stats} from './components';
import useShowdown from './hooks';

const Component = () => {
  const {
    props: {
      stats,
      terrains,
      encounter,
      quarry,
      aiDraws,
      aiActives,
      aiDiscards,
      aiWounds,
      selectedCardId,
    },
    actions: {
      terrainDraw,
      showdownClear,
      preview,
      statIncrease,
      statDecrease,
      aiDraw,
      aiWound,
      aiUndoWound,
      aiShuffleDiscard,
      aiActiveDiscard,
      cardSelect,
      aiUndoActive,
      aiHealWound,
      aiTopDrawDiscard,
    },
  } = useShowdown();

  return (
    <View testID="ShowdownScreen">
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

      {encounter && (
        <List.Item
          title={encounter.name}
          right={(itemProps) => (
            <>
              {selectedCardId && (
                <IconButton
                  {...itemProps}
                  icon="pin-off"
                  onPress={aiUndoActive}
                />
              )}
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
          {aiActives.map((aiActive) => (
            <Card
              key={aiActive.id}
              data={aiActive}
              onPress={() => preview(aiActive.imageUrl)}
              onLongPress={() => cardSelect(aiActive.id)}
              selected={selectedCardId === aiActive.id}
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
            {selectedCardId && (
              <IconButton
                {...itemProps}
                icon="arrow-collapse-down"
                onPress={aiTopDrawDiscard}
              />
            )}
            {selectedCardId && (
              <IconButton {...itemProps} icon="pin" onPress={aiActiveDiscard} />
            )}
            <IconButton
              {...itemProps}
              icon="refresh"
              onPress={aiShuffleDiscard}
            />
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
            onLongPress={() => cardSelect(aiDiscard.id)}
            selected={selectedCardId === aiDiscard.id}
          />
        ))}
      </Cards>
      <List.Item
        title={`Wounds (${aiWounds.length})`}
        right={(itemProps) => (
          <>
            <IconButton
              {...itemProps}
              icon="arrow-collapse-up"
              onPress={aiHealWound}
            />
            <IconButton {...itemProps} icon="undo" onPress={aiUndoWound} />
            <IconButton {...itemProps} icon="plus" onPress={aiWound} />
          </>
        )}
      />
    </View>
  );
};

const ShowdownScreenOptions = {headerShown: false, title: ''};

export default class {
  static Component = Component;
  static Options = ShowdownScreenOptions;
}
