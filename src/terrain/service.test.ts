import {terrainConfigsMap, terrainsMap} from './data';
import TerrainService from './service';

describe('Terrain Service', () => {
  test(`
  Given data of "terrainConfig" is "White Lion"
  When I call "getTerrains"
  Then I should see "3 Terrains"
  Then I should see "Two Tall Grass"
  `, () => {
    const whiteLionTerrainConfig = terrainConfigsMap.WhiteLion;

    const terrains = TerrainService.getTerrains(
      whiteLionTerrainConfig,
      terrainsMap,
    );

    const twoTallGrassTerrain = terrainsMap.TwoTallGrass;

    expect(terrains).toHaveLength(3);
    expect(terrains[0]).toEqual(twoTallGrassTerrain);
    expect(terrains[1]).not.toEqual(twoTallGrassTerrain);
    expect(terrains[2]).not.toEqual(twoTallGrassTerrain);
  });
});
