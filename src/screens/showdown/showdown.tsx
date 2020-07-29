import {Image} from '@components';
import {useScreenDimensions} from '@utils';
import React from 'react';
import {ScrollView} from 'react-native';
import {IconButton, List} from 'react-native-paper';
import styled from 'styled-components/native';
import {Card, Cards, DiceRollers, Stat, Stats} from './components';
import useShowdown from './hooks';

const Component = () => {
  const {isLandscape} = useScreenDimensions();

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
      selectedCardTypeId,
      hitDraws,
      hitDiscards,
      hitActives,
      selectedCardImageUrl,
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
      hitShuffleDiscard,
      hitDraw,
      hitActiveDiscard,
      hitUndoActive,
    },
  } = useShowdown();

  return (
    <Screen isLandscape={isLandscape} testID="ShowdownScreen">
      {isLandscape && (
        <Top>
          {selectedCardImageUrl && <Image imageUrl={selectedCardImageUrl} />}
        </Top>
      )}
      <Bottom>
        <ScrollView>
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
                  {selectedCardTypeId === 'aiActives' && (
                    <IconButton
                      {...itemProps}
                      icon="pin-off"
                      onPress={aiUndoActive}
                    />
                  )}
                  {selectedCardTypeId === 'hitActives' && (
                    <IconButton
                      {...itemProps}
                      icon="pin-off"
                      onPress={hitUndoActive}
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
                  onLongPress={() => cardSelect(aiActive.id, 'aiActives')}
                  selected={selectedCardId === aiActive.id}
                />
              ))}
              {hitActives.map((hitActive) => (
                <Card
                  key={hitActive.id}
                  data={hitActive}
                  onPress={() => preview(hitActive.imageUrl)}
                  onLongPress={() => cardSelect(hitActive.id, 'hitActives')}
                  selected={selectedCardId === hitActive.id}
                />
              ))}
            </Cards>
          )}

          <List.Item
            title={`AI Cards (${aiDraws.length})`}
            right={(itemProps) => (
              <>
                {selectedCardTypeId === 'aiDiscards' && (
                  <IconButton
                    {...itemProps}
                    icon="arrow-collapse-down"
                    onPress={aiTopDrawDiscard}
                  />
                )}
                {selectedCardTypeId === 'aiDiscards' && (
                  <IconButton
                    {...itemProps}
                    icon="pin"
                    onPress={aiActiveDiscard}
                  />
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
                onLongPress={() => cardSelect(aiDiscard.id, 'aiDiscards')}
                selected={selectedCardId === aiDiscard.id}
              />
            ))}
          </Cards>
          <List.Item
            title={`Wounds (${aiWounds.length})`}
            right={(itemProps) => (
              <>
                {aiWounds.length > 0 && (
                  <IconButton
                    {...itemProps}
                    icon="arrow-collapse-up"
                    onPress={aiHealWound}
                  />
                )}
                {aiWounds.length > 0 && (
                  <IconButton
                    {...itemProps}
                    icon="undo"
                    onPress={aiUndoWound}
                  />
                )}
                <IconButton {...itemProps} icon="plus" onPress={aiWound} />
              </>
            )}
          />

          <List.Item
            title={`Hit Locations (${hitDraws.length})`}
            right={(itemProps) => (
              <>
                {selectedCardTypeId === 'hitDiscards' && (
                  <IconButton
                    {...itemProps}
                    icon="pin"
                    onPress={hitActiveDiscard}
                  />
                )}
                <IconButton
                  {...itemProps}
                  icon="refresh"
                  onPress={hitShuffleDiscard}
                />
                <IconButton {...itemProps} icon="star" onPress={hitDraw} />
              </>
            )}
          />
          <Cards horizontal showsHorizontalScrollIndicator={false}>
            {hitDiscards?.map((hitDiscard) => (
              <Card
                key={hitDiscard.id}
                data={hitDiscard}
                onPress={() => preview(hitDiscard.imageUrl)}
                onLongPress={() => cardSelect(hitDiscard.id, 'hitDiscards')}
                selected={selectedCardId === hitDiscard.id}
              />
            ))}
          </Cards>

          <List.Item
            title="Terrains"
            right={(itemProps) => (
              <>
                <IconButton
                  {...itemProps}
                  icon="refresh"
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
                onPress={() => preview(terrain.imageUrl)}
              />
            ))}
          </Cards>
          <EmptyRow />
        </ScrollView>
      </Bottom>
      <DiceRollers />
    </Screen>
  );
};

const ShowdownScreenOptions = {headerShown: false, title: ''};

export default class {
  static Component = Component;
  static Options = ShowdownScreenOptions;
}

const Screen = styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
`;

const Top = styled.View`
  background-color: lightgray;
  flex: 4;
`;

const Bottom = styled.View`
  flex: 6;
`;

const EmptyRow = styled.View`
  height: 32px;
`;
