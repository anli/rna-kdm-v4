import {shuffle} from '@utils';
import R from 'ramda';
import {Terrain, TerrainConfig} from './data';

export default class TerrainService {
  static getTerrains = (
    terrainConfig: TerrainConfig,
    terrainsMap: Record<string, Terrain>,
  ): Terrain[] => {
    const {randomTerrainCount, compulsoryTerrainIds} = terrainConfig;
    const compulsoryTerrains = R.pipe(
      R.pick(compulsoryTerrainIds),
      R.values,
    )(terrainsMap);

    const randomTerrains = R.pipe<
      Record<string, Terrain>,
      Record<string, Terrain>,
      Terrain[],
      Terrain[],
      Terrain[]
    >(
      R.omit(compulsoryTerrainIds),
      R.values,
      shuffle,
      R.take(randomTerrainCount),
    )(terrainsMap);

    return R.concat(compulsoryTerrains, randomTerrains);
  };
}
