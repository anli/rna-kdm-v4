import {QuarryService} from '@quarry';
import R from 'ramda';
import {encountersMap} from './data';
import EncounterService from './service';

describe('Encounter Service', () => {
  test(`
  Given data of "encounter" is "White Lion Level 1"
  When I call "getAiCards"
  Then I should see "10 draws"
  Then I should see "0 actives"
  `, () => {
    const cards = R.values(QuarryService.getQuarry('WhiteLion').aiCardsMap);
    const config = encountersMap.WhiteLionLevel1.aiCardsConfig;
    if (config) {
      const {draws, actives} = EncounterService.getAiCards(config, cards);

      expect(draws).toHaveLength(10);
      expect(actives).toHaveLength(0);
    }
  });

  test(`
  Given data of "encounter" is "White Lion Level 2"
  When I call "getAiCards"
  Then I should see "15 draws"
  Then I should see "1 actives"
  `, () => {
    const cardsMap = QuarryService.getQuarry('WhiteLion').aiCardsMap;
    const config = encountersMap.WhiteLionLevel2.aiCardsConfig;
    if (config) {
      const {draws, actives} = EncounterService.getAiCards(config, cardsMap);

      expect(draws).toHaveLength(15);
      expect(actives).toHaveLength(1);
    }
  });

  test(`
  Given data of "encounter" is "White Lion Level 3"
  When I call "getAiCards"
  Then I should see "21 draws"
  Then I should see "2 actives"
  `, () => {
    const cardsMap = QuarryService.getQuarry('WhiteLion').aiCardsMap;
    const config = encountersMap.WhiteLionLevel2.aiCardsConfig;
    if (config) {
      const {draws, actives} = EncounterService.getAiCards(config, cardsMap);

      expect(draws).toHaveLength(15);
      expect(actives).toHaveLength(1);
    }
  });
});
