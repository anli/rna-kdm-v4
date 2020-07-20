export interface Encounter {
  id: string;
  name: string;
  quarryId: string;
}

export const encountersMap: Record<string, Encounter> = {
  WhiteLionLevel1: {
    id: 'WhiteLionLevel1',
    name: 'White Lion Level 1',
    quarryId: 'WhiteLion',
  },
  WhiteLionLevel2: {
    id: 'WhiteLionLevel2',
    name: 'White Lion Level 2',
    quarryId: 'WhiteLion',
  },
  WhiteLionLevel3: {
    id: 'WhiteLionLevel3',
    name: 'White Lion Level 3',
    quarryId: 'WhiteLion',
  },
};
