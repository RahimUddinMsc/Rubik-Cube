import {useEffect, useState } from "react"
import RubikCube from "../model/RubikCube"
import IRubikCube from "../interfaces/IRubikCube";
import Direction from "../constants/movementDirection";
import {rotateBack, rotateDown, rotateFront, rotateLeft, rotateRight, rotateUp } from "./useCubeActions";

const useRubikCube = () => {
    const [cubeData, setCubeData] = useState(new RubikCube());
    const [explodedCube, setExplodedCube] = useState(false);
    const [startPanel, setStartPanel] = useState(true);
    const [solutionDisplayed, setSolutionDisplayed] = useState(false);
    const [scrambled, setScrambled] = useState(false);
    const [rubikSolved, setRubikSolved] = useState(false);    
        
    //creates an array of functions to be called when scrambling
    const rubikScrambler = [
        (data: IRubikCube) => rotateFront(data, Direction.CLOCKWISE),
        (data: IRubikCube) => rotateRight(data, Direction.ANTICLOCKWISE),
        (data: IRubikCube) => rotateUp(data, Direction.CLOCKWISE),
        (data: IRubikCube) => rotateBack(data, Direction.ANTICLOCKWISE),
        (data: IRubikCube) => rotateLeft(data, Direction.CLOCKWISE),
        (data: IRubikCube) => rotateDown(data, Direction.ANTICLOCKWISE)
    ]

    //scramble the rubik cube and update UI states to start the game
    const scrambleRubikCube = () => {    
        let updatedRubikCube = new RubikCube();

        rubikScrambler.forEach(action => {
            updatedRubikCube = action(updatedRubikCube)
        })

        setCubeData(updatedRubikCube)
        setScrambled(false);
        setStartPanel(false)
    }

    useEffect(() => {
        if(!startPanel && (JSON.stringify(new RubikCube()) == JSON.stringify(cubeData))){            
            setRubikSolved(true)
            setStartPanel(true)
        }
    },[cubeData]) 

    return {
        cubeData, setCubeData, 
        explodedCube, setExplodedCube, 
        startPanel, setStartPanel, 
        solutionDisplayed, setSolutionDisplayed,
        scrambled, scrambleRubikCube,
        rubikSolved
    }
}

export default useRubikCube