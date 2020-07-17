import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Terrain} from '@terrain';

export interface ShowdownState {
  terrains: Terrain[];
}

const INITIAL_STATE = {
  terrains: [],
};

const getShowdownSlice = (initialState = INITIAL_STATE) =>
  createSlice({
    name: 'Showdown',
    initialState,
    reducers: {
      terrainSet: (state: ShowdownState, action: PayloadAction<Terrain[]>) => {
        state.terrains = action.payload;
      },
    },
  });

export default getShowdownSlice;
