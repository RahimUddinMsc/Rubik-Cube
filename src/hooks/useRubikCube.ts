import { useState } from "react"
import RubikCube from "../model/RubikCube"

const useRubikCube = () => {
    const [rubikCube, setRubikCube] = useState(new RubikCube())




    return rubikCube
}

export default useRubikCube