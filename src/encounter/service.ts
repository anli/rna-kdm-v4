import {encountersMap, StatsMap} from './data';

const PREFIX_STAT_IDS = ['SPD', 'DMG', 'ACC', 'LCK'];

const getStats = (statsMap: StatsMap): {name: string; value: string}[] =>
  Object.entries(statsMap).map(([name, value]) => ({
    name,
    value: getStatValue(name, value),
  }));

const getStatValue = (name: string, value: number): string => {
  if (getHasPrefix(name)) {
    return getValueWithPrefix(value);
  }
  return String(value);
};

const getHasPrefix = (name: string) => PREFIX_STAT_IDS.includes(name);

const getValueWithPrefix = (value: number): string => {
  if (value <= 0) {
    return String(value);
  }

  return `+${value}`;
};

class EncounterService {
  static getEncounters = () => Object.values(encountersMap);
  static getEncounter = (id: string) => encountersMap[id];
  static getStats = getStats;
}

export default EncounterService;
