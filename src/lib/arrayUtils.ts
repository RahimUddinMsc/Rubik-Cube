import Direction from "../constants/movementDirection";
import IRubikCube from "../interfaces/IRubikCube";
import IRubikPanel from "../interfaces/IRubikPanel";

export const rotateFront = (rubikCube: IRubikCube, direction: Direction) => {    
    let updatedCube = JSON.parse(JSON.stringify(rubikCube));

    if(direction === Direction.CLOCKWISE){
        updatedCube.front = rotateMultiDimensionArray(updatedCube.front, direction);                    
        updatedCube.top = replaceMultiDimensionArrayVals(rubikCube.left, updatedCube.top, [{row:2, index:0}, {row:2, index:1}, {row:2, index:2}], [{row:2, index:2}, {row:1, index:2}, {row:0, index:2}]);       
        updatedCube.right = replaceMultiDimensionArrayVals(rubikCube.top, updatedCube.right, [{row:0, index:0}, {row:1, index:0}, {row:2, index:0}], [{row:2, index:0}, {row:2, index:1}, {row:2, index:2}]);
        updatedCube.bottom = replaceMultiDimensionArrayVals(rubikCube.right, updatedCube.bottom, [{row:0, index:0}, {row:0, index:1}, {row:0, index:2}], [{row:2, index:0}, {row:1, index:0}, {row:0, index:0}]);
        updatedCube.left = replaceMultiDimensionArrayVals(rubikCube.bottom, updatedCube.left, [{row:0, index:2}, {row:1, index:2}, {row:2, index:2}], [{row:0, index:0},{row:0, index:1}, {row:0, index:2}]);        
    }else{        
        updatedCube.front = rotateMultiDimensionArray(updatedCube.front, direction)                            
        updatedCube.top = replaceMultiDimensionArrayVals(rubikCube.right, updatedCube.top, [{row:2, index:0}, {row:2, index:1}, {row:2, index:2}], [{row:0, index:0}, {row:1, index:0}, {row:2, index:0}]);       
        updatedCube.left = replaceMultiDimensionArrayVals(rubikCube.top, updatedCube.left, [{row:0, index:2}, {row:1, index:2}, {row:2, index:2}], [{row:2, index:2}, {row:2, index:1}, {row:2, index:0}]);
        updatedCube.bottom = replaceMultiDimensionArrayVals(rubikCube.left, updatedCube.bottom, [{row:0, index:0}, {row:0, index:1}, {row:0, index:2}], [{row:0, index:2}, {row:1, index:2}, {row:2, index:2}]);
        updatedCube.right = replaceMultiDimensionArrayVals(rubikCube.bottom, updatedCube.right, [{row:0, index:0}, {row:1, index:0}, {row:2, index:0}], [{row:0, index:2},{row:0, index:1}, {row:0, index:0}]);        
    }

    return updatedCube;
}

export const rotateRight = (rubikCube: IRubikCube, direction: Direction) => {    
    let updatedCube = JSON.parse(JSON.stringify(rubikCube));    

    if(direction === Direction.CLOCKWISE){
        updatedCube.top = replaceMultiDimensionArrayVals(rubikCube.front, updatedCube.top, [{row:0, index:2}, {row:1, index:2}, {row:2, index:2}], [{row:0, index:2}, {row:1, index:2}, {row:2, index:2}]);       
        updatedCube.back = replaceMultiDimensionArrayVals(rubikCube.top, updatedCube.back, [{row:0, index:0}, {row:1, index:0}, {row:2, index:0}], [{row:2, index:2},{row:1, index:2}, {row:0, index:2}]);        
        updatedCube.bottom = replaceMultiDimensionArrayVals(rubikCube.back, updatedCube.bottom, [{row:0, index:2}, {row:1, index:2}, {row:2, index:2}], [{row:0, index:0}, {row:1, index:0}, {row:2, index:0}]);        
        updatedCube.front = replaceMultiDimensionArrayVals(rubikCube.bottom, updatedCube.front, [{row:0, index:2}, {row:1, index:2}, {row:2, index:2}], [{row:0, index:2}, {row:1, index:2}, {row:2, index:2}]);                 
    }else{        
        updatedCube.top = replaceMultiDimensionArrayVals(rubikCube.back, updatedCube.top, [{row:0, index:2},{row:1, index:2},{row:2, index:2}], [{row:2, index:0},{row:1, index:0},{row:0, index:0}]);                
        updatedCube.front = replaceMultiDimensionArrayVals(rubikCube.top, updatedCube.front, [{row:0, index:2},{row:1, index:2},{row:2, index:2}], [{row:0, index:2},{row:1, index:2},{row:2, index:2}]);                
        updatedCube.bottom = replaceMultiDimensionArrayVals(rubikCube.front, updatedCube.bottom, [{row:0, index:2},{row:1, index:2},{row:2, index:2}], [{row:2, index:2},{row:1, index:2},{row:0, index:2}]);        
        updatedCube.back = replaceMultiDimensionArrayVals(rubikCube.bottom, updatedCube.back, [{row:0, index:0},{row:1, index:0},{row:2, index:0}], [{row:2, index:2},{row:1, index:2},{row:0, index:2}]);        
    }

    return updatedCube;
}

export const rotateHorizontal = (rubikCube: IRubikCube, direction: Direction) => {    
    let updatedCube = JSON.parse(JSON.stringify(rubikCube));    

    if(direction === Direction.CLOCKWISE){
        updatedCube.top = rotateMultiDimensionArray(updatedCube.top, direction);          
        updatedCube.front[0] = rubikCube.right[0];
        updatedCube.left[0] = rubikCube.front[0];
        updatedCube.back[0] = rubikCube.left[0];
        updatedCube.right[0] = rubikCube.back[0];        
    }else{        
        updatedCube.top = rotateMultiDimensionArray(updatedCube.top, direction); 
        updatedCube.front[0] = rubikCube.left[0];
        updatedCube.left[0] = rubikCube.back[0];
        updatedCube.back[0] = rubikCube.left[0];
        updatedCube.right[0] = rubikCube.back[0];        
    }

    return updatedCube;
}

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
