import IRubikCube from "../interfaces/IRubikCube";
import style from './../css/defaultCube.module.css';
import CubePanels from "./CubePanels";

const DefaultCube = ({rubikCube}: {rubikCube: IRubikCube}) => {
    return <>    
        <div className={style.default_cube_container}>
            <div className={style.default_cube_modifier}>
                <div className={style.default_cube_top}>
                    <CubePanels rubikPanels={rubikCube.top.flat()}/>            
                </div>

                <div className={style.default_cube_front}>
                    <CubePanels rubikPanels={rubikCube.front.flat()}/>            
                </div>
                            
                <div className={style.default_cube_right}>
                    <CubePanels rubikPanels={rubikCube.right.flat()}/>            
                </div>            
            </div>            
        </div>        
    </>
}

export default DefaultCube;