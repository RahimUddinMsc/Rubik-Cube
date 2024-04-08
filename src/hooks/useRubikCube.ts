import { useEffect, useState } from "react"
import RubikCube from "../model/RubikCube"

const useRubikCube = () => {
    const [cubeData, setCubeData] = useState(new RubikCube())
    const [explodedCube, setExplodedCube] = useState(false)

    return {cubeData, setCubeData, explodedCube, setExplodedCube}
}

export default useRubikCube