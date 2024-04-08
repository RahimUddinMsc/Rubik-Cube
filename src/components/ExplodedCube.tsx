import IRubikCube from "../interfaces/IRubikCube";
import explodedStyle from './../css/explodedCube.module.css';
import CubePanels from "./CubePanels";

const ExplodedCube = ({rubikCube}: {rubikCube: IRubikCube}) => {    

    return <>
        <div className={explodedStyle.exploded_cube_container}>

            {/* row 1 */}
            <div></div>
            <CubePanels className={explodedStyle.top} rubikPanels={rubikCube.top.flat()}/>            
            <div></div>
            <div></div>
            
            {/* row 2 */}        
            <CubePanels className={explodedStyle.left} rubikPanels={rubikCube.left.flat()}/>            
            <CubePanels className={explodedStyle.front} rubikPanels={rubikCube.front.flat()}/>            
            <CubePanels className={explodedStyle.right} rubikPanels={rubikCube.right.flat()}/>            
            <CubePanels className={explodedStyle.back} rubikPanels={rubikCube.back.flat()}/>            
                            
            {/* row 3 */}
            <div></div>
            <CubePanels className={explodedStyle.bottom} rubikPanels={rubikCube.bottom.flat()}/>            
            <div></div>
            <div></div>

        </div>    
    </>
}

export default ExplodedCube;