import Direction from '../constants/movementDirection';
import useCubeActions from '../hooks/useCubeActions';
import IMovementProps from '../interfaces/IMovementActions';
import { rotateFront, rotateHorizontal, rotateRight } from '../lib/arrayUtils';
import actionStyle from './../css/cubeAction.module.css'

const CubeMovementActions = ( prop: IMovementProps) => {
    const rubiks = useCubeActions()

    return <>
        <div className={actionStyle.action_container}>
            <div className={actionStyle.middle_action_container}>
                <div className={actionStyle.middle_clockwise_actions}>
                    <button className={actionStyle.movement_action_btn} data-direction="clockwise-front" onClick={() => prop.setCubeData(rotateFront(prop.cubeData, Direction.CLOCKWISE))}>F</button>
                    <button className={actionStyle.movement_action_btn} data-direction="clockwise-right" onClick={() => prop.setCubeData(rotateRight(prop.cubeData, Direction.CLOCKWISE))}>R</button>
                    <button className={actionStyle.movement_action_btn} data-direction="clockwise-up" onClick={() => prop.setCubeData(rotateHorizontal(prop.cubeData, Direction.CLOCKWISE))}>U</button>
                    <button className={actionStyle.movement_action_btn} data-direction="clockwise-bottom">B</button>
                    <button className={actionStyle.movement_action_btn} data-direction="clockwise-left">L</button>
                    <button className={actionStyle.movement_action_btn} data-direction="clockwise-down">D</button>                    
                </div>
                <div className={actionStyle.middle_anticlockwise_actions}>
                    <button className={actionStyle.movement_action_btn} data-direction="anitclockwise-front" onClick={() => prop.setCubeData(rotateFront(prop.cubeData, Direction.ANTICLOCKWISE))}>F'</button>
                    <button className={actionStyle.movement_action_btn} data-direction="anitclockwise-right" onClick={() => prop.setCubeData(rotateRight(prop.cubeData, Direction.ANTICLOCKWISE))}>R'</button>
                    <button className={actionStyle.movement_action_btn} data-direction="anitclockwise-up" onClick={() => prop.setCubeData(rotateHorizontal(prop.cubeData, Direction.ANTICLOCKWISE))}>U'</button>
                    <button className={actionStyle.movement_action_btn} data-direction="anitclockwise-bottom">B'</button>
                    <button className={actionStyle.movement_action_btn} data-direction="anitclockwise-left">L'</button>
                    <button className={actionStyle.movement_action_btn} data-direction="anitclockwise-down">D'</button>                    
                </div>
            </div>            
        </div>    
    </>
}

export default CubeMovementActions;