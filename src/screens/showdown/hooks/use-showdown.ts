import {useNavigation} from '@react-navigation/native';
import {ShowdownSelectors, showdownSlice} from '@showdown';
import {RootState} from '@store';
import {terrainConfigsMap, TerrainService, terrainsMap} from '@terrain';
import {useDispatch, useSelector} from 'react-redux';

const useShowdown = () => {
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
  };

  return {
    props,
    actions,
  };
};

export default useShowdown;
