import {EncounterService} from '@encounter';
import {QuarryService} from '@quarry';
import {showdownSlice} from '@showdown';
import {terrainConfigsMap, TerrainService, terrainsMap} from '@terrain';
import R from 'ramda';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';

const useEncounterSelect = () => {
  const props = {
    encounters: EncounterService.getEncounters(),
  };

  const dispatch = useDispatch();

  const actions = {
    select: (id: string) => {
      const encounter = EncounterService.getEncounter(id);
      dispatch(showdownSlice.actions.encounterSet(encounter));

      const quarry = QuarryService.getQuarry(encounter.quarryId);
      dispatch(showdownSlice.actions.quarrySet(quarry));

      const {draws: aiDraws, actives: aiActives} = EncounterService.getAiCards(
        encounter.aiCardsConfig,
        quarry.aiCardsMap,
      );

      dispatch(showdownSlice.actions.aiDrawsSet(aiDraws));
      dispatch(showdownSlice.actions.aiActivesSet(aiActives));

      const hitDraws = R.values(quarry.hitCardsMap);
      dispatch(showdownSlice.actions.hitDrawsSet(quarry.id));

      const terrains = TerrainService.getTerrains(
        terrainConfigsMap[quarry.id],
        terrainsMap,
      );
      dispatch(showdownSlice.actions.terrainSet(terrains));

      const imageUrls = [
        quarry.basicActionCardImageUrl,
        quarry.monsterCardImageUrl,
        ...R.pluck<'imageUrl', {imageUrl: string}>('imageUrl', aiDraws),
        ...R.pluck<'imageUrl', {imageUrl: string}>('imageUrl', aiActives),
        ...R.pluck<'imageUrl', {imageUrl: string}>('imageUrl', hitDraws),
        ...R.pluck<'imageUrl', {imageUrl: string}>('imageUrl', terrains),
      ];
      FastImage.preload(imageUrls.map((uri) => ({uri})));
    },
  };

  return {props, actions};
};

export default useEncounterSelect;
