import {Encounter} from '@encounter';
import {createSelector} from '@reduxjs/toolkit';
import {Terrain} from '@terrain';
import {ShowdownState} from './get-slice';

const showdownSelector = createSelector<
  {showdown: ShowdownState},
  ShowdownState,
  ShowdownState
>(
  (state) => state.showdown,
  (showdown) => showdown,
);

const terrainsSelector = createSelector<
  {showdown: ShowdownState},
  ShowdownState,
  Terrain[]
>(showdownSelector, (showdown) => showdown.terrains);

const hasEncounterSelector = createSelector<
  {showdown: ShowdownState},
  ShowdownState,
  boolean
>(showdownSelector, (showdown) => showdown.encounter != null);

const encounterSelector = createSelector<
  {showdown: ShowdownState},
  ShowdownState,
  Encounter | undefined
>(showdownSelector, (showdown) => showdown.encounter);

export default class {
  static getTerrains = terrainsSelector;
  static getHasEncounter = hasEncounterSelector;
  static getEncounter = encounterSelector;
}
