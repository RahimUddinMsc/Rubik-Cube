import Direction from "../constants/movementDirection";
import useDefaultCubeView from "../hooks/useDefaultCubeView";
import IRubikCube from "../interfaces/IRubikCube";
import style from './../css/defaultCube.module.css';
import CubePanels from "./CubePanels";
import './../css/defaultCube.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight, faCircleLeft, faCircleUp } from '@fortawesome/free-solid-svg-icons'



const DefaultCube = ({rubikCube}: {rubikCube: IRubikCube}) => {
    const rubikHandler = useDefaultCubeView(rubikCube);
    const rubikViewHandler = rubikHandler.view();

    return <>    
        <button className={style.default_cube_action_btn} onClick={() => rubikHandler.rotateCube(Direction.ANTICLOCKWISE)}>
            <FontAwesomeIcon icon={faCircleLeft} size='2x' />
        </button>

        <div id="default_cube_container" className={style.default_cube_container}>
            <div className={style.default_cube_modifier}>
                <div className={`${style.default_cube_top} ${style[rubikViewHandler!.topViewRotation]}`}>
                    <CubePanels rubikPanels={rubikHandler.flipped ? rubikCube.bottom.flat().reverse() : rubikCube.top.flat()}/>            
                </div>

                <div className={style.default_cube_front}>
                    <CubePanels rubikPanels={rubikHandler.flipped ? rubikViewHandler!.front.flat().reverse() : rubikViewHandler!.front.flat()}/>            
                </div>

                <div className={style.default_cube_right}>
                    <CubePanels rubikPanels={rubikHandler.flipped ? rubikViewHandler!.right.flat().reverse() : rubikViewHandler!.right.flat()}/>            
                </div>            
            </div>            
        </div>            
              
        <button className={style.default_cube_action_btn} onClick={() => rubikHandler.rotateCube(Direction.CLOCKWISE)}>
            <FontAwesomeIcon icon={faCircleRight} size='2x' />
        </button>

        <button className={`${style.default_cube_action_btn} ${style.cube_action_flip_btn}`} onClick={() => rubikHandler.setFlipped(!rubikHandler.flipped)}>
            <FontAwesomeIcon icon={faCircleUp} size='2x' />
        </button>
    </>
}

export default DefaultCube;