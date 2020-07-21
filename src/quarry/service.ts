import {quarriesMap} from './data';

class QuarryService {
  static getQuarries = () => Object.values(quarriesMap);
  static getQuarry = (id: string) => quarriesMap[id];
}

export default QuarryService;
