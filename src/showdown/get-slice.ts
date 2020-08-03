import {Encounter} from '@encounter';
import {Quarry, QuarryService} from '@quarry';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Terrain} from '@terrain';
import {shuffle} from '@utils';
import R from 'ramda';

export interface ShowdownState {
  terrains: Terrain[];
  encounter?: Encounter;
  quarry?: Quarry;
  aiDraws: any[];
  aiActives: any[];
  aiDiscards: any[];
  aiWounds: any[];
  hitDraws: any[];
  hitDiscards: any[];
  hitActives: any[];
}

const INITIAL_STATE = {
  terrains: [],
  encounter: undefined,
  quarry: undefined,
  aiDraws: [],
  aiActives: [],
  aiDiscards: [],
  aiWounds: [],
  hitDraws: [],
  hitDiscards: [],
  hitActives: [],
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
      aiActiveDiscard: (
        state: ShowdownState,
        action: PayloadAction<string>,
      ) => {
        const [from, to] = shiftFromTo(
          action.payload,
          state.aiDiscards,
          state.aiActives,
        );
        state.aiDiscards = from;
        state.aiActives = to;
      },
      aiUndoActive: (state: ShowdownState, action: PayloadAction<string>) => {
        const [from, to] = shiftFromTo(
          action.payload,
          state.aiActives,
          state.aiDiscards,
        );
        state.aiActives = from;
        state.aiDiscards = to;
      },
      aiHealWound: (state: ShowdownState) => {
        if (state.aiWounds.length > 0) {
          const [card, ...aiWounds] = state.aiWounds;
          state.aiWounds = aiWounds;
          state.aiDraws = [...state.aiDraws, card];
        }
      },
      aiTopDrawDiscard: (
        state: ShowdownState,
        action: PayloadAction<string>,
      ) => {
        const [from, to] = shiftFromTo(
          action.payload,
          state.aiDiscards,
          state.aiDraws,
        );
        state.aiDiscards = from;
        state.aiDraws = to;
      },
      hitDrawsSet: (state: ShowdownState, action: PayloadAction<string>) => {
        const hitDraws = R.values(
          QuarryService.getQuarry(action.payload).hitCardsMap,
        );
        state.hitDraws = hitDraws;
      },
      hitDraw: (state: ShowdownState) => {
        if (state.hitDraws.length > 0) {
          const [topCard, ...hitDraws] = state.hitDraws;
          state.hitDraws = hitDraws;
          state.hitDiscards = [topCard, ...state.hitDiscards];
        }
      },
      hitShuffleDiscard: (state: ShowdownState) => {
        if (state.hitDiscards.length > 0) {
          state.hitDraws = shuffle([...state.hitDraws, ...state.hitDiscards]);
          state.hitDiscards = [];
        }
      },
      hitActiveDiscard: (
        state: ShowdownState,
        action: PayloadAction<string>,
      ) => {
        const [from, to] = shiftFromTo(
          action.payload,
          state.hitDiscards,
          state.hitActives,
        );
        state.hitDiscards = from;
        state.hitActives = to;
      },
      hitUndoActive: (state: ShowdownState, action: PayloadAction<string>) => {
        const [from, to] = shiftFromTo(
          action.payload,
          state.hitActives,
          state.hitDiscards,
        );
        state.hitActives = from;
        state.hitDiscards = to;
      },
    },
  });

export default getShowdownSlice;

const shiftFromTo = (id: string, from: any[], to: any[]) => {
  const card = R.find(R.propEq('id', id))(from);
  if (card) {
    const shiftedFrom = R.reject(R.propEq('id', id))(from);
    const shiftedTo = [card, ...to];
    return [shiftedFrom, shiftedTo];
  }

  return [from, to];
};
