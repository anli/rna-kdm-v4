import {createSelector} from '@reduxjs/toolkit';
import {Terrain} from '@terrain';
import {ShowdownState} from './get-slice';

const terrainsSelector = createSelector<
  {showdown: ShowdownState},
  ShowdownState,
  Terrain[]
>(
  (state) => state.showdown,
  (showdown) => showdown.terrains,
);

export default class {
  static getTerrains = terrainsSelector;
}
