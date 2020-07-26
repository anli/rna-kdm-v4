import {Encounter} from '@encounter';
import {Quarry} from '@quarry';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Terrain} from '@terrain';

export interface ShowdownState {
  terrains: Terrain[];
  encounter?: Encounter;
  quarry?: Quarry;
  aiDraws: any[];
  aiActives: any[];
  aiDiscards: any[];
}

const INITIAL_STATE = {
  terrains: [],
  encounter: undefined,
  quarry: undefined,
  aiDraws: [],
  aiActives: [],
  aiDiscards: [],
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
    },
  });

export default getShowdownSlice;
