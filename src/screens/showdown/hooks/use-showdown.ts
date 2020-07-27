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
  const [selectedCardTypeId, setSelectedCardTypeId] = useState<
    string | undefined
  >(undefined);
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
    selectedCardTypeId,
    hitDraws: ShowdownSelectors.getHitDraws(state),
    hitDiscards: ShowdownSelectors.getHitDiscards(state),
    hitActives: ShowdownSelectors.getHitActives(state),
  };

  const selectedClear = () => {
    setSelectedCardId(undefined);
    setSelectedCardTypeId(undefined);
  };

  const actions = {
    terrainDraw: () => {
      selectedClear();
      dispatch(
        showdownSlice.actions.terrainSet(
          TerrainService.getTerrains(terrainConfigsMap.WhiteLion, terrainsMap),
        ),
      );
    },
    showdownClear: () => {
      selectedClear();
      dispatch(showdownSlice.actions.showdownClear());
    },
    preview: (imageUrl: string) => {
      selectedClear();
      navigate('PreviewScreen', {imageUrl});
    },
    statIncrease: (id: string) => {
      selectedClear();
      dispatch(showdownSlice.actions.statIncrease(id));
    },
    statDecrease: (id: string) => {
      selectedClear();
      dispatch(showdownSlice.actions.statDecrease(id));
    },
    aiDraw: () => {
      selectedClear();
      dispatch(showdownSlice.actions.aiDraw());
    },
    aiWound: () => {
      selectedClear();
      dispatch(showdownSlice.actions.aiWound());
    },
    aiUndoWound: () => {
      selectedClear();
      dispatch(showdownSlice.actions.aiUndoWound());
    },
    aiShuffleDiscard: () => {
      selectedClear();
      dispatch(showdownSlice.actions.aiShuffleDiscard());
    },
    aiActiveDiscard: () => {
      const selectedDiscardId = R.find(R.propEq('id', selectedCardId))(
        props.aiDiscards,
      )?.id;
      if (selectedDiscardId) {
        dispatch(showdownSlice.actions.aiActiveDiscard(selectedDiscardId));
        selectedClear();
      }
    },
    cardSelect: (id: string, type: string) => {
      setSelectedCardId(id);
      setSelectedCardTypeId(type);
    },
    aiUndoActive: () => {
      const selectedActiveId = R.find(R.propEq('id', selectedCardId))(
        props.aiActives,
      )?.id;

      if (selectedActiveId) {
        dispatch(showdownSlice.actions.aiUndoActive(selectedActiveId));
        selectedClear();
      }
    },
    aiHealWound: () => {
      selectedClear();
      dispatch(showdownSlice.actions.aiHealWound());
    },
    aiTopDrawDiscard: () => {
      const selectedDiscardId = R.find(R.propEq('id', selectedCardId))(
        props.aiDiscards,
      )?.id;

      if (selectedDiscardId) {
        dispatch(showdownSlice.actions.aiTopDrawDiscard(selectedDiscardId));
        selectedClear();
      }
    },
    hitShuffleDiscard: () => {
      selectedClear();
      dispatch(showdownSlice.actions.hitShuffleDiscard());
    },
    hitDraw: () => {
      selectedClear();
      dispatch(showdownSlice.actions.hitDraw());
    },
    hitActiveDiscard: () => {
      const selectedDiscardId = R.find(R.propEq('id', selectedCardId))(
        props.hitDiscards,
      )?.id;
      if (selectedDiscardId) {
        dispatch(showdownSlice.actions.hitActiveDiscard(selectedDiscardId));
        selectedClear();
      }
    },
    hitUndoActive: () => {
      const selectedActiveId = R.find(R.propEq('id', selectedCardId))(
        props.hitActives,
      )?.id;

      if (selectedActiveId) {
        dispatch(showdownSlice.actions.hitUndoActive(selectedActiveId));
        selectedClear();
      }
    },
  };

  return {
    props,
    actions,
  };
};

export default useShowdown;
