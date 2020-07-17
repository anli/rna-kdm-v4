export interface Terrain {
  id: string;
  name: string;
  imageUrl: string;
}

export const terrainsMap: Record<string, Terrain> = {
  TwoAcanthusPlants: {
    id: 'TwoAcanthusPlants',
    name: '2 Acanthus Plants',
    imageUrl: 'https://imgur.com/EINniQW.png',
  },
  BugPatch: {
    id: 'BugPatch',
    name: 'Bug Patch',
    imageUrl: 'https://imgur.com/6etIlA2.png',
  },
  DeadMonster: {
    id: 'DeadMonster',
    name: 'Dead Monster',
    imageUrl: 'https://imgur.com/7p500y7.png',
  },
  Debris: {
    id: 'Debris',
    name: 'Debris',
    imageUrl: 'https://imgur.com/Rd4n7sc.png',
  },
  GiantStoneFace: {
    id: 'GiantStoneFace',
    name: 'Giant Stone Face',
    imageUrl: 'https://imgur.com/0jWqBu0.png',
  },
  NightmareTree: {
    id: 'NightmareTree',
    name: 'Nightmare Tree',
    imageUrl: 'https://imgur.com/DClHdAb.png',
  },
  OreVein: {
    id: 'OreVein',
    name: 'Ore Vein',
    imageUrl: 'https://imgur.com/8qONhpC.png',
  },
  ThreeStoneColumns: {
    id: 'ThreeStoneColumns',
    name: 'Three Stone Columns',
    imageUrl: 'https://imgur.com/hBZHuAu.png',
  },
  SurvivorCorpse: {
    id: 'SurvivorCorpse',
    name: 'Survivor Corpse',
    imageUrl: 'https://imgur.com/1CaZe6j.png',
  },
  TwoTallGrass: {
    id: 'TwoTallGrass',
    name: '2 Tall Grass',
    imageUrl: 'https://imgur.com/8kmeuLI.png',
  },
  ToppledPillar: {
    id: 'ToppledPillar',
    name: 'Toppled Pillar',
    imageUrl: 'https://imgur.com/gdSEk7L.png',
  },
};

export interface TerrainConfig {
  randomTerrainCount: number;
  compulsoryTerrainIds: string[];
}

export const terrainConfigsMap: Record<string, TerrainConfig> = {
  WhiteLion: {
    randomTerrainCount: 2,
    compulsoryTerrainIds: ['TwoTallGrass'],
  },
};
