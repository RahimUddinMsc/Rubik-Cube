import Direction from "../constants/movementDirection";
import IMovementProps from "../interfaces/IMovementProps";
import IRubikCube from "../interfaces/IRubikCube";
import { replaceMultiDimensionArrayVals, rotateMultiDimensionArray } from "../lib/arrayUtils";

const useCubeActions = (action: IMovementProps) => {

    const rotateRubikFront = (direction: Direction) => {
        action.setCubeData(rotateFront(action.cubeData, direction))        
    }

    const rotateRubikRight = (direction: Direction) => {
        action.setCubeData(rotateRight(action.cubeData, direction))
    }

    const rotateRubikUp = (direction: Direction) => {
        action.setCubeData(rotateUp(action.cubeData, direction))
    }

    const rotateRubikBack = (direction: Direction) => {
        action.setCubeData(rotateBack(action.cubeData, direction))
    }

    const rotateRubikLeft = (direction: Direction) => {
        action.setCubeData(rotateLeft(action.cubeData, direction))
    }

    const rotateRubikDown = (direction: Direction) => {
        action.setCubeData(rotateDown(action.cubeData, direction))
    }

    return {rotateRubikFront, rotateRubikRight, rotateRubikUp, rotateRubikBack, rotateRubikLeft, rotateRubikDown}    
    
}

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
        updatedCube.right = rotateMultiDimensionArray(updatedCube.right, direction);
        updatedCube.top = replaceMultiDimensionArrayVals(rubikCube.front, updatedCube.top, [{row:0, index:2}, {row:1, index:2}, {row:2, index:2}], [{row:0, index:2}, {row:1, index:2}, {row:2, index:2}]);       
        updatedCube.back = replaceMultiDimensionArrayVals(rubikCube.top, updatedCube.back, [{row:0, index:0}, {row:1, index:0}, {row:2, index:0}], [{row:2, index:2},{row:1, index:2}, {row:0, index:2}]);        
        updatedCube.bottom = replaceMultiDimensionArrayVals(rubikCube.back, updatedCube.bottom, [{row:0, index:2}, {row:1, index:2}, {row:2, index:2}], [{row:2, index:0}, {row:1, index:0}, {row:0, index:0}]);        
        updatedCube.front = replaceMultiDimensionArrayVals(rubikCube.bottom, updatedCube.front, [{row:0, index:2}, {row:1, index:2}, {row:2, index:2}], [{row:0, index:2}, {row:1, index:2}, {row:2, index:2}]);                 
    }else{        
        updatedCube.right = rotateMultiDimensionArray(updatedCube.right, direction);
        updatedCube.top = replaceMultiDimensionArrayVals(rubikCube.back, updatedCube.top, [{row:0, index:2},{row:1, index:2},{row:2, index:2}], [{row:2, index:0},{row:1, index:0},{row:0, index:0}]);                
        updatedCube.front = replaceMultiDimensionArrayVals(rubikCube.top, updatedCube.front, [{row:0, index:2},{row:1, index:2},{row:2, index:2}], [{row:0, index:2},{row:1, index:2},{row:2, index:2}]);                
        updatedCube.bottom = replaceMultiDimensionArrayVals(rubikCube.front, updatedCube.bottom, [{row:0, index:2},{row:1, index:2},{row:2, index:2}], [{row:0, index:2},{row:1, index:2},{row:2, index:2}]);        
        updatedCube.back = replaceMultiDimensionArrayVals(rubikCube.bottom, updatedCube.back, [{row:0, index:0},{row:1, index:0},{row:2, index:0}], [{row:2, index:2},{row:1, index:2},{row:0, index:2}]);        
    }

    return updatedCube;
}

export const rotateUp = (rubikCube: IRubikCube, direction: Direction) => {    
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
        updatedCube.right[0] = rubikCube.front[0];
        updatedCube.back[0] = rubikCube.right[0];
        updatedCube.left[0] = rubikCube.back[0];        
    }

    return updatedCube;
}

export const rotateBack = (rubikCube: IRubikCube, direction: Direction) => {    
    let updatedCube = JSON.parse(JSON.stringify(rubikCube));    

    if(direction === Direction.CLOCKWISE){
        updatedCube.back = rotateMultiDimensionArray(updatedCube.back, direction);
        updatedCube.top = replaceMultiDimensionArrayVals(rubikCube.right, updatedCube.top, [{row:0, index:0}, {row:0, index:1}, {row:0, index:2}], [{row:0, index:2}, {row:1, index:2}, {row:2, index:2}]);       
        updatedCube.left = replaceMultiDimensionArrayVals(rubikCube.top, updatedCube.left, [{row:0, index:0}, {row:1, index:0}, {row:2, index:0}], [{row:0, index:2},{row:0, index:1}, {row:0, index:0}]);        
        updatedCube.bottom = replaceMultiDimensionArrayVals(rubikCube.left, updatedCube.bottom, [{row:2, index:0}, {row:2, index:1}, {row:2, index:2}], [{row:0, index:0}, {row:1, index:0}, {row:2, index:0}]);        
        updatedCube.right = replaceMultiDimensionArrayVals(rubikCube.bottom, updatedCube.right, [{row:0, index:2}, {row:1, index:2}, {row:2, index:2}], [{row:2, index:2}, {row:2, index:1}, {row:2, index:0}]);                 
    }else{        
        updatedCube.back = rotateMultiDimensionArray(updatedCube.back, direction);
        updatedCube.top = replaceMultiDimensionArrayVals(rubikCube.left, updatedCube.top, [{row:0, index:0},{row:0, index:1},{row:0, index:2}], [{row:2, index:0},{row:1, index:0},{row:0, index:0}]);                
        updatedCube.right = replaceMultiDimensionArrayVals(rubikCube.top, updatedCube.right, [{row:0, index:2},{row:1, index:2},{row:2, index:2}], [{row:0, index:0},{row:0, index:1},{row:0, index:2}]);                
        updatedCube.bottom = replaceMultiDimensionArrayVals(rubikCube.right, updatedCube.bottom, [{row:2, index:0},{row:2, index:1},{row:2, index:2}], [{row:2, index:2},{row:1, index:2},{row:0, index:2}]);        
        updatedCube.left = replaceMultiDimensionArrayVals(rubikCube.bottom, updatedCube.left, [{row:0, index:0},{row:1, index:0},{row:2, index:0}], [{row:2, index:0},{row:2, index:1},{row:2, index:2}]);        
    }

    return updatedCube;
}

export const rotateLeft = (rubikCube: IRubikCube, direction: Direction) => {    
    let updatedCube = JSON.parse(JSON.stringify(rubikCube));    

    if(direction === Direction.CLOCKWISE){
        updatedCube.left = rotateMultiDimensionArray(updatedCube.left, direction);
        updatedCube.top = replaceMultiDimensionArrayVals(rubikCube.back, updatedCube.top, [{row:0, index:0}, {row:1, index:0}, {row:2, index:0}], [{row:2, index:2}, {row:1, index:2}, {row:0, index:2}]);
        updatedCube.front = replaceMultiDimensionArrayVals(rubikCube.top, updatedCube.front, [{row:0, index:0}, {row:1, index:0}, {row:2, index:0}], [{row:0, index:0}, {row:1, index:0}, {row:2, index:0}]);
        updatedCube.bottom = replaceMultiDimensionArrayVals(rubikCube.front, updatedCube.bottom, [{row:0, index:0}, {row:1, index:0}, {row:2, index:0}], [{row:0, index:0},{row:1, index:0}, {row:2, index:0}]);
        updatedCube.back = replaceMultiDimensionArrayVals(rubikCube.bottom, updatedCube.back, [{row:0, index:2}, {row:1, index:2}, {row:2, index:2}], [{row:2, index:0}, {row:1, index:0}, {row:0, index:0}]);              
    }else{        
        updatedCube.left = rotateMultiDimensionArray(updatedCube.left, direction);        
        updatedCube.top = replaceMultiDimensionArrayVals(rubikCube.front, updatedCube.top, [{row:0, index:0}, {row:1, index:0}, {row:2, index:0}], [{row:0, index:0}, {row:1, index:0}, {row:2, index:0}]);
        updatedCube.back = replaceMultiDimensionArrayVals(rubikCube.top, updatedCube.back, [{row:0, index:2}, {row:1, index:2}, {row:2, index:2}], [{row:2, index:0}, {row:1, index:0}, {row:0, index:0}]);
        updatedCube.bottom = replaceMultiDimensionArrayVals(rubikCube.back, updatedCube.bottom, [{row:0, index:0}, {row:1, index:0}, {row:2, index:0}], [{row:2, index:2},{row:1, index:2}, {row:0, index:2}]);
        updatedCube.front = replaceMultiDimensionArrayVals(rubikCube.bottom, updatedCube.front, [{row:0, index:0}, {row:1, index:0}, {row:2, index:0}], [{row:0, index:0}, {row:1, index:0}, {row:2, index:0}]);
    }

    return updatedCube;
}

export const rotateDown = (rubikCube: IRubikCube, direction: Direction) => {    
    let updatedCube = JSON.parse(JSON.stringify(rubikCube));    

    if(direction === Direction.CLOCKWISE){
        updatedCube.bottom = rotateMultiDimensionArray(updatedCube.bottom, direction);
        updatedCube.front[2] = rubikCube.left[2];
        updatedCube.right[2] = rubikCube.front[2];
        updatedCube.back[2] = rubikCube.right[2];
        updatedCube.left[2] = rubikCube.back[2];        
    }else{        
        updatedCube.bottom = rotateMultiDimensionArray(updatedCube.bottom, direction);
        updatedCube.front[2] = rubikCube.right[2];
        updatedCube.left[2] = rubikCube.front[2];
        updatedCube.back[2] = rubikCube.left[2];
        updatedCube.right[2] = rubikCube.back[2];            
    }

    return updatedCube;
}


export default useCubeActions;