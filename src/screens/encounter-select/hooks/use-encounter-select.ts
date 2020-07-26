import {EncounterService} from '@encounter';
import {QuarryService} from '@quarry';
import {showdownSlice} from '@showdown';
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
    },
  };

  return {props, actions};
};

export default useEncounterSelect;
