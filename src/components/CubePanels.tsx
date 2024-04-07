import IRubikPanel from "../interfaces/IRubikPanel";
import rubikStyle from './../css/rubiks.module.css';

const CubePanels = ({rubikPanels}: {rubikPanels: IRubikPanel[]}) => {
    return <>    
        <div className={rubikStyle.rubiks_cube_panel}>                            
            {rubikPanels.map((panel,index) => {                    
                return <div key={`${panel.display}-${index}`} className={`${rubikStyle.rubiks_cube_panel_item} ${rubikStyle[`rubiks_panel_${panel.display}`]}`}>{index}</div>
            })}
        </div>     
    </>
}

export default CubePanels