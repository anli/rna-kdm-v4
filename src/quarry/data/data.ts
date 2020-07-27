import {butcherAiCardsMap, butcherHitCardsMap} from './butcher';
import {
  screamingAntelopeAiCardsMap,
  screamingAntelopeHitCardsMap,
} from './screaming-antelope';
import {whiteLionAiCardsMap, whiteLionHitCardsMap} from './white-lion';

export interface AiCard {
  id: string;
  name: string;
  imageUrl: string;
  type?: string;
  subType?: string;
  level?: string;
}

export interface HitCard {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Quarry {
  id: string;
  name: string;
  monsterCardImageUrl: string;
  basicActionCardImageUrl: string;
  aiCardsMap: Record<string, AiCard>;
  hitCardsMap: Record<string, HitCard>;
}

export const quarriesMap: Record<string, Quarry> = {
  WhiteLion: {
    id: 'WhiteLion',
    name: 'White Lion',
    monsterCardImageUrl: 'https://imgur.com/6voXSGA.png',
    basicActionCardImageUrl: 'https://imgur.com/rmgHnYU.png',
    aiCardsMap: whiteLionAiCardsMap,
    hitCardsMap: whiteLionHitCardsMap,
  },
  ScreamingAntelope: {
    id: 'ScreamingAntelope',
    name: 'Screaming Antelope',
    monsterCardImageUrl: 'https://imgur.com/EmpaVx2.png',
    basicActionCardImageUrl: 'https://imgur.com/iZQ3AGN.png',
    aiCardsMap: screamingAntelopeAiCardsMap,
    hitCardsMap: screamingAntelopeHitCardsMap,
  },
  Butcher: {
    id: 'Butcher',
    name: 'Butcher',
    monsterCardImageUrl: 'https://imgur.com/ux5kS6O.png',
    basicActionCardImageUrl: 'https://imgur.com/RuXLMxx.png',
    aiCardsMap: butcherAiCardsMap,
    hitCardsMap: butcherHitCardsMap,
  },
};
