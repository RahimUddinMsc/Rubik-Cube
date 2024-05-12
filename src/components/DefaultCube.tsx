import Direction from "../constants/movementDirection";
import useDefaultCubeView from "../hooks/useDefaultCubeView";
import IRubikCube from "../interfaces/IRubikCube";
import style from './../css/defaultCube.module.css';
import CubePanels from "./CubePanels";
import './../css/defaultCube.module.css';

const DefaultCube = ({rubikCube}: {rubikCube: IRubikCube}) => {
    const rubikHandler = useDefaultCubeView(rubikCube);
    const rubikViewHandler = rubikHandler.view();

    return <>    
        <button onClick={() => rubikHandler.rotateCube(Direction.ANTICLOCKWISE)}>left</button>

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

        <button onClick={() => rubikHandler.rotateCube(Direction.CLOCKWISE)}>right</button>
        <button onClick={() => rubikHandler.setFlipped(!rubikHandler.flipped)}>flips</button>
    </>
}

export default DefaultCube;