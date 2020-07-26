import {Encounter, EncounterService} from '@encounter';
import {Quarry} from '@quarry';
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

const quarrySelector = createSelector<
  {showdown: ShowdownState},
  ShowdownState,
  Quarry | undefined
>(showdownSelector, (showdown) => showdown.quarry);

const statsSelector = createSelector<
  {showdown: ShowdownState},
  Encounter | undefined,
  {name: string; value: string}[]
>(encounterSelector, (encounter) =>
  encounter?.statsMap ? EncounterService.getStats(encounter.statsMap) : [],
);

const aiDrawsSelector = createSelector<
  {showdown: ShowdownState},
  ShowdownState,
  any[]
>(showdownSelector, (showdown) => showdown.aiDraws);

const aiActivesSelector = createSelector<
  {showdown: ShowdownState},
  ShowdownState,
  any[]
>(showdownSelector, (showdown) => showdown.aiActives);

const aiDiscardsSelector = createSelector<
  {showdown: ShowdownState},
  ShowdownState,
  any[]
>(showdownSelector, (showdown) => showdown.aiDiscards);

const aiWoundsSelector = createSelector<
  {showdown: ShowdownState},
  ShowdownState,
  any[]
>(showdownSelector, (showdown) => showdown.aiWounds);

export default class {
  static getTerrains = terrainsSelector;
  static getHasEncounter = hasEncounterSelector;
  static getEncounter = encounterSelector;
  static getQuarry = quarrySelector;
  static getStats = statsSelector;
  static getAiDraws = aiDrawsSelector;
  static getAiActives = aiActivesSelector;
  static getAiDiscards = aiDiscardsSelector;
  static getAiWounds = aiWoundsSelector;
}
