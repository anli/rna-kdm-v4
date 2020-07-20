import {Encounter} from '@encounter';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Terrain} from '@terrain';

export interface ShowdownState {
  terrains: Terrain[];
  encounter?: Encounter;
}

const INITIAL_STATE = {
  terrains: [],
  encounter: undefined,
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
      encounterRemove: () => {
        return INITIAL_STATE;
      },
    },
  });

export default getShowdownSlice;
