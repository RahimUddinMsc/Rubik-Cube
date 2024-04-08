import Direction from "../../../constants/movementDirection";
import { replaceMultiDimensionArrayVals, rotateMultiDimensionArray } from "../../../lib/arrayUtils";

describe('replaceMultiDimensionArrayVals', () => {
  
  test('return same array if no positions to loop through', () => {    
    const multiArrayToUpdateFrom = [[1],[2]];    
    const multiArrayToUpdate = [[1],[2]]
    
    const positions: { row: number; index: number }[] = [];
    const replacingPositions: { row: number; index: number }[] = [];

    const result = replaceMultiDimensionArrayVals(multiArrayToUpdateFrom,multiArrayToUpdate,positions,replacingPositions);

    expect(result).toEqual(multiArrayToUpdate);
  });

  test('return newly modified multi-dimensional arrau', () => {    
    const replacingPositions = [
      { row: 0, index: 0 }, // 1
      { row: 1, index: 1 }, // 4
    ];

    const multiArrayToUpdateFrom = [
      [1, 2],
      [3, 4],
    ];

    const positions = [
      { row: 0, index: 0 }, //5 => 1
      { row: 1, index: 1 }, //8 => 4
    ];
    
    const multiArrayToUpdate = [
      [5, 2],
      [7, 8],
    ];

    const result = replaceMultiDimensionArrayVals(multiArrayToUpdateFrom,multiArrayToUpdate,positions,replacingPositions);

    expect(result).toEqual([
      [1, 2],
      [7, 4],
    ]);    
  });

});


describe('rotateMultiDimensionArray', () => {  
  
  test('return clockwise rotated multidimensional array', () => {
    const multiArrayToUpdate = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const result = rotateMultiDimensionArray(multiArrayToUpdate, Direction.CLOCKWISE);

    expect(result).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });

  test('return anticlockwise rotated multidimensional array', () => {
    const multiArrayToUpdate = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const result = rotateMultiDimensionArray(multiArrayToUpdate, Direction.ANTICLOCKWISE);

    expect(result).toEqual([
      [3, 6, 9],
      [2, 5, 8],
      [1, 4, 7],
    ]);
  });
  
});

