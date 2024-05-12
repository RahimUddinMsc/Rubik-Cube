import useDefaultCubeView from "../hooks/useDefaultCubeView";
import IRubikCube from "../interfaces/IRubikCube";
import style from './../css/defaultCube.module.css';
import CubePanels from "./CubePanels";

const DefaultCube = ({rubikCube}: {rubikCube: IRubikCube}) => {
    const rubikHandler = useDefaultCubeView(rubikCube);

    return <>    
        <div id="default_cube_container" className={style.default_cube_container}>
            <div className={style.default_cube_modifier}>
                <div className={style.default_cube_top}>
                    <CubePanels rubikPanels={rubikCube.top.flat()}/>            
                </div>

                <div className={style.default_cube_front}>
                    <CubePanels rubikPanels={rubikHandler.view.front.flat()}/>            
                </div>

                <div className={style.default_cube_right}>
                    <CubePanels rubikPanels={rubikCube.right.flat()}/>            
                </div>            
            </div>            
        </div>        
    </>
}

export default DefaultCube;