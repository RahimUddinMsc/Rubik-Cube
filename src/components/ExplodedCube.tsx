import IRubikCube from "../interfaces/IRubikCube";
import style from './../css/explodedCube.module.css';
import CubePanels from "./CubePanels";

const ExplodedCube = ({rubikCube}: {rubikCube: IRubikCube}) => {
    console.log(rubikCube)

    return <>
        <div className={style.exploded_cube_container}>

            {/* row 1 */}
            <div></div>
            <CubePanels rubikPanels={rubikCube.top.flat()}/>            
            <div></div>
            <div></div>
            
            {/* row 2 */}        
            <CubePanels rubikPanels={rubikCube.left.flat()}/>            
            <CubePanels rubikPanels={rubikCube.front.flat()}/>            
            <CubePanels rubikPanels={rubikCube.right.flat()}/>            
            <CubePanels rubikPanels={rubikCube.back.flat()}/>            
                            
            {/* row 3 */}
            <div></div>
            <CubePanels rubikPanels={rubikCube.bottom.flat()}/>            
            <div></div>
            <div></div>

        </div>    
    </>
}

export default ExplodedCube;