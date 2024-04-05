import IRubikPanel from "../interfaces/IRubikPanel";
import style from './../css/explodedCube.module.css';
import rubikStyle from './../css/rubiks.module.css';

const ExplodedCubePanels = ({rubikPanels}: {rubikPanels: IRubikPanel[]}) => {
    return <>    
        <div className={style.exploded_cube_panel}>                            
            {rubikPanels.map((panel,index) => {                    
                return <div key={`${panel.display}-${index}`} className={`${style.exploded_cube_panel_item} ${rubikStyle[`rubiks_panel_${panel.display}`]}`}>{index}</div>
            })}
        </div>     
    </>
}

export default ExplodedCubePanels