import IRubikCube from "../interfaces/IRubikCube";
import ExplodedCubePanels from "./ExplodedCubePanels";
import style from './../css/defaultCube.module.css';

const DefaultCube = ({rubikCube}: {rubikCube: IRubikCube}) => {
    return <>    
        <div className={style.default_cube_container}>
            <div className={style.default_cube_modifier}>
                <div className={style.default_cube_top}>
                    <ExplodedCubePanels rubikPanels={rubikCube.top.flat()}/>            
                </div>

                <div className={style.default_cube_front}>
                    <ExplodedCubePanels rubikPanels={rubikCube.front.flat()}/>            
                </div>
                            
                <div className={style.default_cube_right}>
                    <ExplodedCubePanels rubikPanels={rubikCube.right.flat()}/>            
                </div>            
            </div>            
        </div>        
    </>
}

export default DefaultCube;