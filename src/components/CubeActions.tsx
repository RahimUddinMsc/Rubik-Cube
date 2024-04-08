import Direction from '../constants/movementDirection';
import useCubeActions from '../hooks/useCubeActions';
import IMovementProps from '../interfaces/IMovementProps';
import actionStyle from './../css/cubeAction.module.css'

const CubeMovementActions = (prop: IMovementProps) => {
    const action = useCubeActions(prop)

    return <>
        <div className={actionStyle.action_container}>
            <div className={actionStyle.middle_action_container}>
                <div className={actionStyle.middle_clockwise_actions}>
                    <button className={actionStyle.movement_action_btn} data-direction="clockwise-front" onClick={() => action.rotateRubikFront(Direction.CLOCKWISE)}>F</button>
                    <button className={actionStyle.movement_action_btn} data-direction="clockwise-right" onClick={() => action.rotateRubikRight(Direction.CLOCKWISE)}>R</button>
                    <button className={actionStyle.movement_action_btn} data-direction="clockwise-up" onClick={() => action.rotateRubikUp(Direction.CLOCKWISE)}>U</button>
                    <button className={actionStyle.movement_action_btn} data-direction="clockwise-bottom" onClick={() => action.rotateRubikBack(Direction.CLOCKWISE)}>B</button>
                    <button className={actionStyle.movement_action_btn} data-direction="clockwise-left" onClick={() => action.rotateRubikLeft(Direction.CLOCKWISE)}>L</button>
                    <button className={actionStyle.movement_action_btn} data-direction="clockwise-down" onClick={() => action.rotateRubikDown(Direction.CLOCKWISE)}>D</button>                    
                </div>
                <div className={actionStyle.middle_anticlockwise_actions}>
                    <button className={actionStyle.movement_action_btn} data-direction="anitclockwise-front" onClick={() => action.rotateRubikFront(Direction.ANTICLOCKWISE)}>F'</button>
                    <button className={actionStyle.movement_action_btn} data-direction="anitclockwise-right" onClick={() => action.rotateRubikRight(Direction.ANTICLOCKWISE)}>R'</button>
                    <button className={actionStyle.movement_action_btn} data-direction="anitclockwise-up" onClick={() => action.rotateRubikUp(Direction.ANTICLOCKWISE)}>U'</button>
                    <button className={actionStyle.movement_action_btn} data-direction="anitclockwise-bottom" onClick={() => action.rotateRubikBack(Direction.ANTICLOCKWISE)}>B'</button>
                    <button className={actionStyle.movement_action_btn} data-direction="anitclockwise-left" onClick={() => action.rotateRubikLeft(Direction.ANTICLOCKWISE)}>L'</button>
                    <button className={actionStyle.movement_action_btn} data-direction="anitclockwise-down" onClick={() => action.rotateRubikDown(Direction.ANTICLOCKWISE)}>D'</button>                    
                </div>
            </div>            
        </div>    
    </>
}

export default CubeMovementActions;