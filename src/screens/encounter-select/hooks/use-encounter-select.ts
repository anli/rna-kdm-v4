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
    },
  };

  return {props, actions};
};

export default useEncounterSelect;
