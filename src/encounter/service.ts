import {AiCard} from '@quarry';
import {shuffle} from '@utils';
import R from 'ramda';
import {AiCardsConfig, encountersMap, StatsMap} from './data';

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

const getRandomCardsByLevel = (level: string, count: number, cards: any[]) => {
  const levelCards: any[] = R.filter(R.propEq('level', level), cards);
  return R.slice(0, count)(shuffle(levelCards));
};

const getAiCards = (
  {
    levelACount,
    levelBCount,
    levelLCount,
    startingCardIds,
    topCardIds,
    fixedCardIds,
  }: AiCardsConfig = {},
  cardsMap: Record<string, AiCard>,
): {draws: any[]; actives: any[]} => {
  const cards = R.values(cardsMap);
  const aCards = levelACount
    ? getRandomCardsByLevel('A', levelACount, cards)
    : [];
  const bCards = levelBCount
    ? getRandomCardsByLevel('B', levelBCount, cards)
    : [];
  const lCount = levelLCount
    ? getRandomCardsByLevel('L', levelLCount, cards)
    : [];
  const topCards = topCardIds
    ? R.pipe(R.pick(topCardIds), R.values)(cardsMap)
    : [];
  const fixedCards = fixedCardIds
    ? R.pipe(R.pick(fixedCardIds), R.values)(cardsMap)
    : [];

  const draws = [
    ...topCards,
    ...shuffle([...fixedCards, ...aCards, ...bCards, ...lCount]),
  ];

  const actives = startingCardIds
    ? R.pipe(R.pick(startingCardIds), R.values)(cardsMap)
    : [];

  return {draws, actives};
};

class EncounterService {
  static getEncounters = () => Object.values(encountersMap);
  static getEncounter = (id: string) => encountersMap[id];
  static getStats = getStats;
  static getAiCards = getAiCards;
}

export default EncounterService;
