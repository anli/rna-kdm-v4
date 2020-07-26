import {Encounter} from '@encounter';
import {Quarry} from '@quarry';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Terrain} from '@terrain';
import {shuffle} from '@utils';

export interface ShowdownState {
  terrains: Terrain[];
  encounter?: Encounter;
  quarry?: Quarry;
  aiDraws: any[];
  aiActives: any[];
  aiDiscards: any[];
  aiWounds: any[];
}

const INITIAL_STATE = {
  terrains: [],
  encounter: undefined,
  quarry: undefined,
  aiDraws: [],
  aiActives: [],
  aiDiscards: [],
  aiWounds: [],
};

const getShowdownSlice = (initialState = INITIAL_STATE) =>
  createSlice({
    name: 'Showdown',
    initialState,
    reducers: {
      terrainSet: (state: ShowdownState, action: PayloadAction<Terrain[]>) => {
        state.terrains = action.payload;
      },
      encounterSet: (
        state: ShowdownState,
        action: PayloadAction<Encounter>,
      ) => {
        state.encounter = action.payload;
      },
      showdownClear: () => {
        return INITIAL_STATE;
      },
      quarrySet: (state: ShowdownState, action: PayloadAction<Quarry>) => {
        state.quarry = action.payload;
      },
      statIncrease: (state: ShowdownState, action: PayloadAction<string>) => {
        if (state.encounter?.statsMap) {
          state.encounter.statsMap[action.payload]++;
        }
      },
      statDecrease: (state: ShowdownState, action: PayloadAction<string>) => {
        if (state.encounter?.statsMap) {
          state.encounter.statsMap[action.payload]--;
        }
      },
      aiDrawsSet: (state: ShowdownState, action: PayloadAction<any[]>) => {
        state.aiDraws = action.payload;
      },
      aiActivesSet: (state: ShowdownState, action: PayloadAction<any[]>) => {
        state.aiActives = action.payload;
      },
      aiDraw: (state: ShowdownState) => {
        if (state.aiDraws.length > 0) {
          const [topCard, ...aiDraws] = state.aiDraws;
          state.aiDraws = aiDraws;
          state.aiDiscards = [topCard, ...state.aiDiscards];
        }
      },
      aiWound: (state: ShowdownState) => {
        if (state.aiDraws.length > 0) {
          const [topCard, ...aiDraws] = state.aiDraws;
          state.aiDraws = aiDraws;
          state.aiWounds = [topCard, ...state.aiWounds];
        }
      },
      aiUndoWound: (state: ShowdownState) => {
        if (state.aiWounds.length > 0) {
          const [topCard, ...aiWounds] = state.aiWounds;
          state.aiWounds = aiWounds;
          state.aiDraws = [topCard, ...state.aiDraws];
        }
      },
      aiShuffleDiscard: (state: ShowdownState) => {
        if (state.aiDiscards.length > 0 && state.aiDraws.length === 0) {
          state.aiDraws = shuffle(state.aiDiscards);
          state.aiDiscards = [];
        }
      },
    },
  });

export default getShowdownSlice;
