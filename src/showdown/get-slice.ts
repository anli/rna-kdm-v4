import {Encounter} from '@encounter';
import {Quarry} from '@quarry';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Terrain} from '@terrain';

export interface ShowdownState {
  terrains: Terrain[];
  encounter?: Encounter;
  quarry?: Quarry;
}

const INITIAL_STATE = {
  terrains: [],
  encounter: undefined,
  quarry: undefined,
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
    },
  });

export default getShowdownSlice;
