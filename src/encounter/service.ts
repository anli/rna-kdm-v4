import {encountersMap} from './data';

class EncounterService {
  static getEncounters = () => Object.values(encountersMap);
  static getEncounter = (id: string) => encountersMap[id];
}

export default EncounterService;
