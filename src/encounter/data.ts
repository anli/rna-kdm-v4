export type StatsMap = Record<string, number>;

export interface Encounter {
  id: string;
  name: string;
  quarryId: string;
  statsMap: StatsMap;
}

export const encountersMap: Record<string, Encounter> = {
  WhiteLionLevel1: {
    id: 'WhiteLionLevel1',
    name: 'White Lion Level 1',
    quarryId: 'WhiteLion',
    statsMap: {
      MOV: 6,
      TGH: 6,
      SPD: 0,
      DMG: 0,
      ACC: 0,
      LCK: 0,
    },
  },
  WhiteLionLevel2: {
    id: 'WhiteLionLevel2',
    name: 'White Lion Level 2',
    quarryId: 'WhiteLion',
    statsMap: {
      MOV: 6,
      TGH: 8,
      SPD: 0,
      DMG: 0,
      ACC: 0,
      LCK: 0,
    },
  },
  WhiteLionLevel3: {
    id: 'WhiteLionLevel3',
    name: 'White Lion Level 3',
    quarryId: 'WhiteLion',
    statsMap: {
      MOV: 7,
      TGH: 11,
      SPD: 1,
      DMG: 1,
      ACC: 0,
      LCK: 1,
    },
  },
};
