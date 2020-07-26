import {useNavigation} from '@react-navigation/native';
import {ShowdownSelectors, showdownSlice} from '@showdown';
import {RootState} from '@store';
import {terrainConfigsMap, TerrainService, terrainsMap} from '@terrain';
import R from 'ramda';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useShowdown = () => {
  const [selectedCardId, setSelectedCardId] = useState<string | undefined>(
    undefined,
  );
  const {navigate} = useNavigation();
  const state = useSelector<RootState, RootState>((res) => res);
  const dispatch = useDispatch();

  const props = {
    encounter: ShowdownSelectors.getEncounter(state),
    terrains: ShowdownSelectors.getTerrains(state),
    quarry: ShowdownSelectors.getQuarry(state),
    stats: ShowdownSelectors.getStats(state),
    aiDraws: ShowdownSelectors.getAiDraws(state),
    aiActives: ShowdownSelectors.getAiActives(state),
    aiDiscards: ShowdownSelectors.getAiDiscards(state),
    aiWounds: ShowdownSelectors.getAiWounds(state),
    selectedCardId,
  };

  const actions = {
    terrainDraw: () =>
      dispatch(
        showdownSlice.actions.terrainSet(
          TerrainService.getTerrains(terrainConfigsMap.WhiteLion, terrainsMap),
        ),
      ),
    showdownClear: () => dispatch(showdownSlice.actions.showdownClear()),
    preview: (imageUrl: string) => navigate('PreviewScreen', {imageUrl}),
    statIncrease: (id: string) =>
      dispatch(showdownSlice.actions.statIncrease(id)),
    statDecrease: (id: string) =>
      dispatch(showdownSlice.actions.statDecrease(id)),
    aiDraw: () => dispatch(showdownSlice.actions.aiDraw()),
    aiWound: () => dispatch(showdownSlice.actions.aiWound()),
    aiUndoWound: () => dispatch(showdownSlice.actions.aiUndoWound()),
    aiShuffleDiscard: () => dispatch(showdownSlice.actions.aiShuffleDiscard()),
    aiActiveDiscard: () => dispatch(showdownSlice.actions.aiActiveDiscard()),
    cardSelect: (id: string) => setSelectedCardId(id),
    aiUndoActive: () => {
      const selectedActiveId = R.find(R.propEq('id', selectedCardId))(
        props.aiActives,
      )?.id;

      if (selectedActiveId) {
        dispatch(showdownSlice.actions.aiUndoActive(selectedActiveId));
        setSelectedCardId(undefined);
      }
    },
  };

  return {
    props,
    actions,
  };
};

export default useShowdown;
