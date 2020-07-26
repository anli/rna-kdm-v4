export interface AiCard {
  id: string;
  name: string;
  imageUrl: string;
  type: string;
  subType: string;
  level: string;
}
export interface Quarry {
  id: string;
  name: string;
  monsterCardImageUrl: string;
  basicActionCardImageUrl: string;
  aiCardsMap: Record<string, AiCard>;
}

const whiteLionAiCardsMap = {
  WHITE_LION_AI_ALERT: {
    id: 'WHITE_LION_AI_ALERT',
    imageUrl: 'https://imgur.com/PDhAtjC.png',
    name: 'Alert',
    type: 'AI',
    subType: 'MOOD',
    level: 'A',
  },
  WHITE_LION_AI_BAT_AROUND: {
    id: 'WHITE_LION_AI_BAT_AROUND',
    imageUrl: 'https://imgur.com/QDbad03.png',
    name: 'Alert',
    type: 'AI',
    subType: 'NONE',
    level: 'B',
  },
  WHITE_LION_AI_BLOODTHIRSTY: {
    id: 'WHITE_LION_AI_BLOODTHIRSTY',
    imageUrl: 'https://imgur.com/GzSjzAx.png',
    name: 'Bloodthirsty',
    type: 'AI',
    subType: 'MOOD',
    level: 'A',
    token: 0,
  },
  WHITE_LION_AI_BLOODY_CLAW: {
    id: 'WHITE_LION_AI_BLOODY_CLAW',
    imageUrl: 'https://imgur.com/jPoBWtW.png',
    name: 'Bloody Claw',
    type: 'AI',
    subType: 'NONE',
    level: 'A',
  },
  WHITE_LION_AI_COMBO_CLAW: {
    id: 'WHITE_LION_AI_COMBO_CLAW',
    imageUrl: 'https://imgur.com/7DHzhW0.png',
    name: 'Combo Claw',
    type: 'AI',
    subType: 'NONE',
    level: 'B',
  },
  WHITE_LION_AI_CUNNING: {
    id: 'WHITE_LION_AI_CUNNING',
    imageUrl: 'https://imgur.com/4GTZeks.png',
    name: 'Cunning',
    type: 'AI',
    subType: 'TRAIT',
    level: 'S',
  },
  WHITE_LION_AI_GOLDEN_EYES: {
    id: 'WHITE_LION_AI_GOLDEN_EYES',
    imageUrl: 'https://imgur.com/jpCj3NV.png',
    name: 'Golden Eyes',
    type: 'AI',
    subType: 'TRAIT',
    level: 'L',
  },
  WHITE_LION_AI_GROUND_FIGHTING: {
    id: 'WHITE_LION_AI_GROUND_FIGHTING',
    imageUrl: 'https://imgur.com/vYcWBcO.png',
    name: 'Ground Fighting',
    type: 'AI',
    subType: 'MOOD',
    level: 'A',
  },
  WHITE_LION_AI_LICK_WOUNDS: {
    id: 'WHITE_LION_AI_LICK_WOUNDS',
    imageUrl: 'https://imgur.com/pnHnKno.png',
    name: 'Lick Wounds',
    type: 'AI',
    subType: 'NONE',
    level: 'A',
    heal: 1,
  },
  WHITE_LION_AI_MERCILESS: {
    id: 'WHITE_LION_AI_MERCILESS',
    imageUrl: 'https://imgur.com/HH6M4Gp.png',
    name: 'Merciless',
    type: 'AI',
    subType: 'TRAIT',
    level: 'S',
  },
  WHITE_LION_AI_REVENGE: {
    id: 'WHITE_LION_AI_REVENGE',
    imageUrl: 'https://imgur.com/NvuhLRG.png',
    name: 'Revenge',
    type: 'AI',
    subType: 'NONE',
    level: 'B',
  },
  WHITE_LION_AI_SMART_CAT: {
    id: 'WHITE_LION_AI_SMART_CAT',
    imageUrl: 'https://imgur.com/nc46gHt.png',
    name: 'Smart Cat',
    type: 'AI',
    subType: 'NONE',
    level: 'A',
  },
  WHITE_LION_AI_VANISH: {
    id: 'WHITE_LION_AI_VANISH',
    imageUrl: 'https://imgur.com/qirQbPV.png',
    name: 'Vanish',
    type: 'AI',
    subType: 'DURATION',
    level: 'L',
  },
  WHITE_LION_AI_VICIOUS_CLAW: {
    id: 'WHITE_LION_AI_VICIOUS_CLAW',
    imageUrl: 'https://imgur.com/SVv2nno.png',
    name: 'Vicious Claw',
    type: 'AI',
    subType: 'NONE',
    level: 'B',
  },
  WHITE_LION_AI_CLAW: {
    id: 'WHITE_LION_AI_CLAW',
    imageUrl: 'https://imgur.com/zhw8GCD.png',
    name: 'Claw',
    type: 'AI',
    subType: 'NONE',
    level: 'B',
  },
  WHITE_LION_AI_CLAW_2: {
    id: 'WHITE_LION_AI_CLAW_2',
    imageUrl: 'https://imgur.com/zhw8GCD.png',
    name: 'Claw',
    type: 'AI',
    subType: 'NONE',
    level: 'B',
  },
  WHITE_LION_AI_CHOMP: {
    id: 'WHITE_LION_AI_CHOMP',
    imageUrl: 'https://imgur.com/A8cdPN5.png',
    name: 'Chomp',
    type: 'AI',
    subType: 'NONE',
    level: 'B',
  },
  WHITE_LION_AI_SIZE_UP: {
    id: 'WHITE_LION_AI_SIZE_UP',
    imageUrl: 'https://imgur.com/DeJRPOT.png',
    name: 'Size Up',
    type: 'AI',
    subType: 'NONE',
    level: 'B',
  },
  WHITE_LION_AI_SIZE_UP_2: {
    id: 'WHITE_LION_AI_SIZE_UP_2',
    imageUrl: 'https://imgur.com/DeJRPOT.png',
    name: 'Size Up',
    type: 'AI',
    subType: 'NONE',
    level: 'B',
  },
  WHITE_LION_AI_POWER_SWAT: {
    id: 'WHITE_LION_AI_POWER_SWAT',
    imageUrl: 'https://imgur.com/Ja9cqIk.png',
    name: 'Power Swat',
    type: 'AI',
    subType: 'NONE',
    level: 'B',
  },
  WHITE_LION_AI_GRASP: {
    id: 'WHITE_LION_AI_GRASP',
    imageUrl: 'https://imgur.com/veQqQyw.png',
    name: 'Grasp',
    type: 'AI',
    subType: 'NONE',
    level: 'B',
  },
  WHITE_LION_AI_GRASP_2: {
    id: 'WHITE_LION_AI_GRASP_2',
    imageUrl: 'https://imgur.com/veQqQyw.png',
    name: 'Grasp',
    type: 'AI',
    subType: 'NONE',
    level: 'B',
  },
  WHITE_LION_AI_MAUL: {
    id: 'WHITE_LION_AI_MAUL',
    imageUrl: 'https://imgur.com/yT0RvDA.png',
    name: 'Maul',
    type: 'AI',
    subType: 'NONE',
    level: 'A',
  },
  WHITE_LION_AI_TERRIFYING_ROAR: {
    id: 'WHITE_LION_AI_TERRIFYING_ROAR',
    imageUrl: 'https://imgur.com/r8S2NPr.png',
    name: 'Terrifying roar',
    type: 'AI',
    subType: 'NONE',
    level: 'A',
  },
  WHITE_LION_AI_ENRAGED: {
    id: 'WHITE_LION_AI_ENRAGED',
    imageUrl: 'https://imgur.com/xEsTvK3.png',
    name: 'Enraged',
    type: 'AI',
    subType: 'MOOD',
    level: 'A',
  },
};

export const quarriesMap: Record<string, Quarry> = {
  WhiteLion: {
    id: 'WhiteLion',
    name: 'White Lion',
    monsterCardImageUrl: 'https://imgur.com/6voXSGA.png',
    basicActionCardImageUrl: 'https://imgur.com/rmgHnYU.png',
    aiCardsMap: whiteLionAiCardsMap,
  },
};
