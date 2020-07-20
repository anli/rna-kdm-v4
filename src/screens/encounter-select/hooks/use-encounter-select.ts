import {EncounterService} from '@encounter';
import {showdownSlice} from '@showdown';
import {useDispatch} from 'react-redux';

const useEncounterSelect = () => {
  const props = {
    encounters: EncounterService.getEncounters(),
  };

  const dispatch = useDispatch();

  const actions = {
    select: (id: string) =>
      dispatch(
        showdownSlice.actions.encounterSet(EncounterService.getEncounter(id)),
      ),
  };

  return {props, actions};
};

export default useEncounterSelect;
