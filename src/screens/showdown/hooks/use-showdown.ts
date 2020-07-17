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
    terrains: ShowdownSelectors.getTerrains(state),
  };

  const actions = {
    terrainPreview: (id: string) =>
      navigate('PreviewScreen', {imageUrl: terrainsMap[id].imageUrl}),
    terrainDraw: () =>
      dispatch(
        showdownSlice.actions.terrainSet(
          TerrainService.getTerrains(terrainConfigsMap.WhiteLion, terrainsMap),
        ),
      ),
  };

  return {
    props,
    actions,
  };
};

export default useShowdown;
