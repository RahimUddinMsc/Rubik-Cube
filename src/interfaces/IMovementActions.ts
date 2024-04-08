import RubikCube from "../model/RubikCube"

interface IMovementProps{
    cubeData: RubikCube
    setCubeData: React.Dispatch<React.SetStateAction<RubikCube>>
}

export default IMovementProps