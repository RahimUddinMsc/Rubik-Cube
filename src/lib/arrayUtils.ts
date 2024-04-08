import Direction from "../constants/movementDirection";
import IRubikPanel from "../interfaces/IRubikPanel";


export const replaceMultiDimensionArrayVals = (multiArrayToUpdateFrom: IRubikPanel[][], multiArrayToUpdate:IRubikPanel[][], positions: {row:number, index:number}[], replacingPositions: {row:number, index:number}[]) => {    
    // console.log(multiArrayToUpdateFrom,multiArrayToUpdate)
    positions.forEach((pos,mapIndex) => {        
        multiArrayToUpdate[pos.row][pos.index] = multiArrayToUpdateFrom[replacingPositions[mapIndex].row][replacingPositions[mapIndex].index];
    })

    return multiArrayToUpdate 
}

export const rotateMultiDimensionArray = (multiArrayToUpdate: IRubikPanel[][], direction: Direction) => {    
    let updatedArray = multiArrayToUpdate[0].map((el:IRubikPanel, colIndex:number) => multiArrayToUpdate.map((row:IRubikPanel[]) => row[colIndex]));   
    
    return direction === Direction.CLOCKWISE ?  updatedArray = updatedArray.map((row:IRubikPanel[]) => row.reverse()) : updatedArray.reverse();
}
