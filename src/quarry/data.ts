export interface Quarry {
  id: string;
  name: string;
  monsterCardImageUrl: string;
  basicActionCardImageUrl: string;
}

export const quarriesMap: Record<string, Quarry> = {
  WhiteLion: {
    id: 'WhiteLion',
    name: 'White Lion',
    monsterCardImageUrl: 'https://imgur.com/6voXSGA.png',
    basicActionCardImageUrl: 'https://imgur.com/rmgHnYU.png',
  },
};
