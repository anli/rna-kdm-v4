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
  };

  return {
    props,
    actions,
  };
};

export default useShowdown;
