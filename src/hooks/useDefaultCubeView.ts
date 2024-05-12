import { useState } from "react";
import IRubikCube from "../interfaces/IRubikCube";
import Direction from "../constants/movementDirection";

const useDefaultCubeView = (rubikCube: IRubikCube) => {
    const [viewIndex, setViewIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);

    const rotateCube = (direction: Direction) => {
        let currentIndex = viewIndex;

        direction === Direction.CLOCKWISE ? currentIndex-- : currentIndex++

        if(currentIndex === 4)
            currentIndex = 0

        if(currentIndex === -1)
            currentIndex = 3

        setViewIndex(currentIndex)
    }

    const rubikViewMap = new Map([
        [0, {front: rubikCube.front, right: flipped ? rubikCube.left : rubikCube.right , topViewRotation: 'default_cube_top_rotated_right'}],
        [1, {front: flipped ? rubikCube.left : rubikCube.right, right: rubikCube.back, topViewRotation: 'default_cube_top_rotated_left'}],
        [2, {front: rubikCube.back, right: flipped ? rubikCube.right : rubikCube.left, topViewRotation: 'default_cube_top_rotated_top'}],
        [3, {front: flipped ? rubikCube.right : rubikCube.left, right: rubikCube.front, topViewRotation: 'default_cube_top_rotated_back'}]
    ]);

    const view = () => rubikViewMap.get(viewIndex);

    return {rotateCube, view, flipped, setFlipped}
}

export default useDefaultCubeView;