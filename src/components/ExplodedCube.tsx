import IRubikCube from "../interfaces/IRubikCube";
import style from './../css/explodedCube.module.css';
import ExplodedCubePanels from "./ExplodedCubePanels";

const ExplodedCube = ({rubikCube}: {rubikCube: IRubikCube}) => {
    console.log(rubikCube)

    return <>
        <div className={style.exploded_cube_container}>

            {/* row 1 */}
            <div></div>
            <ExplodedCubePanels rubikPanels={rubikCube.top.flat()}/>            
            <div></div>
            <div></div>
            
            {/* row 2 */}        
            <ExplodedCubePanels rubikPanels={rubikCube.left.flat()}/>            
            <ExplodedCubePanels rubikPanels={rubikCube.front.flat()}/>            
            <ExplodedCubePanels rubikPanels={rubikCube.right.flat()}/>            
            <ExplodedCubePanels rubikPanels={rubikCube.back.flat()}/>            
                            
            {/* row 3 */}
            <div></div>
            <ExplodedCubePanels rubikPanels={rubikCube.bottom.flat()}/>            
            <div></div>
            <div></div>

        </div>    
    </>
}

export default ExplodedCube;