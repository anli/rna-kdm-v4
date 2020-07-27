export type StatsMap = Record<string, number>;
export interface AiCardsConfig {
  levelACount?: number;
  levelBCount?: number;
  levelLCount?: number;
  startingCardIds?: string[];
  fixedCardIds?: string[];
  topCardIds?: string[];
}

export interface Encounter {
  id: string;
  name: string;
  quarryId: string;
  statsMap: StatsMap;
  aiCardsConfig: AiCardsConfig;
}

export const encountersMap: Record<string, Encounter> = {
  WhiteLionFirstStory: {
    id: 'WhiteLionFirstStory',
    name: 'White Lion First Story',
    quarryId: 'WhiteLion',
    statsMap: {
      MOV: 6,
      TGH: 6,
      SPD: 0,
      DMG: 0,
      ACC: 0,
      LCK: 0,
      EVA: 0,
    },
    aiCardsConfig: {
      fixedCardIds: [
        'WHITE_LION_AI_CHOMP',
        'WHITE_LION_AI_SIZE_UP',
        'WHITE_LION_AI_POWER_SWAT',
        'WHITE_LION_AI_GRASP',
        'WHITE_LION_AI_MAUL',
        'WHITE_LION_AI_TERRIFYING_ROAR',
        'WHITE_LION_AI_ENRAGED',
      ],
      topCardIds: ['WHITE_LION_AI_CLAW'],
    },
  },
  WhiteLionLevel1: {
    id: 'WhiteLionLevel1',
    name: 'White Lion Level 1',
    quarryId: 'WhiteLion',
    statsMap: {
      MOV: 6,
      TGH: 8,
      SPD: 0,
      DMG: 0,
      ACC: 0,
      LCK: 0,
      EVA: 0,
    },
    aiCardsConfig: {
      levelACount: 3,
      levelBCount: 7,
    },
  },
  WhiteLionLevel2: {
    id: 'WhiteLionLevel2',
    name: 'White Lion Level 2',
    quarryId: 'WhiteLion',
    statsMap: {
      MOV: 7,
      TGH: 10,
      SPD: 1,
      DMG: 1,
      ACC: 0,
      LCK: 0,
      EVA: 0,
    },
    aiCardsConfig: {
      levelACount: 5,
      levelBCount: 10,
      startingCardIds: ['WHITE_LION_AI_CUNNING'],
    },
  },
  WhiteLionLevel3: {
    id: 'WhiteLionLevel3',
    name: 'White Lion Level 3',
    quarryId: 'WhiteLion',
    statsMap: {
      MOV: 8,
      TGH: 14,
      SPD: 2,
      DMG: 2,
      ACC: 2,
      LCK: 1,
      EVA: 0,
    },
    aiCardsConfig: {
      levelACount: 9,
      levelBCount: 10,
      levelLCount: 2,
      startingCardIds: ['WHITE_LION_AI_CUNNING', 'WHITE_LION_AI_MERCILESS'],
    },
  },
  ScreamingAntelopeLevel1: {
    id: 'ScreamingAntelopeLevel1',
    name: 'Screaming Antelope Level 1',
    quarryId: 'ScreamingAntelope',
    statsMap: {
      MOV: 6,
      TGH: 8,
      SPD: 0,
      DMG: 0,
      ACC: 0,
      LCK: 0,
      EVA: 0,
    },
    aiCardsConfig: {
      levelACount: 3,
      levelBCount: 7,
      startingCardIds: ['GobbleUp'],
    },
  },
  ScreamingAntelopeLevel2: {
    id: 'ScreamingAntelopeLevel2',
    name: 'Screaming Antelope Level 2',
    quarryId: 'ScreamingAntelope',
    statsMap: {
      MOV: 8,
      TGH: 10,
      SPD: 1,
      DMG: 1,
      ACC: 0,
      LCK: 0,
      EVA: 0,
    },
    aiCardsConfig: {
      levelACount: 5,
      levelBCount: 10,
      startingCardIds: ['GobbleUp', 'Trample', 'Diabolical'],
    },
  },
  ScreamingAntelopeLevel3: {
    id: 'ScreamingAntelopeLevel3',
    name: 'Screaming Antelope Level 3',
    quarryId: 'ScreamingAntelope',
    statsMap: {
      MOV: 8,
      TGH: 12,
      SPD: 2,
      DMG: 2,
      ACC: 0,
      LCK: 0,
      EVA: 1,
    },
    aiCardsConfig: {
      levelACount: 8,
      levelBCount: 12,
      levelLCount: 2,
      startingCardIds: ['GobbleUp', 'Trample', 'Diabolical', 'Hypermetabolism'],
    },
  },
};
