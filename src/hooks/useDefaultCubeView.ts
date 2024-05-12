import { useState } from "react";
import IRubikCube from "../interfaces/IRubikCube";
import Direction from "../constants/movementDirection";

const useDefaultCubeView = (rubikCube: IRubikCube) => {
    const [viewIndex, setViewIndex] = useState(0);

    const rotateCube = (direction: Direction) => {
        let currentIndex = viewIndex;

        Direction.CLOCKWISE ? currentIndex++ : currentIndex--

        if(currentIndex == 4)
            currentIndex = 0

        if(currentIndex == -1)
            currentIndex = 4

        setViewIndex(currentIndex)
    }

    const rubikViewMap = new Map([
        [0, {front: rubikCube.front, left: rubikCube.right}],
        [1, {front: rubikCube.right, left: rubikCube.back}],
        [2, {front: rubikCube.back, left: rubikCube.left}],
        [3, {front: rubikCube.left, left: rubikCube.front}]
    ]);

    const view = () => rubikViewMap.get(viewIndex);

    return {rotateCube, view}

}

export default useDefaultCubeView;