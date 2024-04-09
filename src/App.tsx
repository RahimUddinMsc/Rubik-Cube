import './App.css';
import style from './css/rubiks.module.css';
import DefaultCube from './components/DefaultCube';
import ExplodedCube from './components/ExplodedCube';
import useRubikCube from './hooks/useRubikCube';
import CubeMovementActions from './components/CubeActions';
import actionStyle from './css/cubeAction.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRepeat, faExpand, faInfo, faPlay } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const rubikCube = useRubikCube();

  return <>  
    <div className={style.rubiks_container}>
      {rubikCube.startPanel && <>
        <div className={style.rubiks_container_start_panel}>                        
                    
          <button className={style.rubiks_start_panel_action} onClick={() => rubikCube.scrambleRubikCube()}>            
            Scramble
          </button>                            

          {rubikCube.rubikSolved && <>
            <div id="rubik_solved_header" className={style.rubiks_start_panel_solved}>              
              Solved - Play Again?
            </div>          
          </>}

          <button className={style.rubiks_start_panel_action} onClick={() => rubikCube.setStartPanel(false)}>
            Freeplay
          </button>       

        </div>              
      </>}

      <div className={style.rubiks_container_header}>
          <h2>Rubik's Cube</h2>
      </div>    
    
      <div id="rubiks_container_cube" className={style.rubiks_container_cube}>              
        {rubikCube.explodedCube ? <ExplodedCube rubikCube={rubikCube.cubeData}/> : <DefaultCube rubikCube={rubikCube.cubeData}/>}
      </div>

      <div className={style.rubiks_container_actions}>
        <div className={actionStyle.action_container}>

          <div className={actionStyle.left_action_container}>                        
                        
            <button id="rubiks_view_toggle" className={actionStyle.action_container_btn} onClick={() => rubikCube.setExplodedCube(!rubikCube.explodedCube)}>                
              <div><FontAwesomeIcon icon={faExpand} size='2x' /></div>
              {rubikCube.explodedCube ? <>Contract</> : <>Explode</>}
            </button>

            <button className={actionStyle.action_container_btn} onClick={() => window.location.reload()}>         
              <div><FontAwesomeIcon icon={faPlay} size='2x' /></div>     
              Restart
            </button>

          </div>

          <CubeMovementActions cubeData={rubikCube.cubeData} setCubeData={rubikCube.setCubeData}/>

          <div className={actionStyle.right_action_container}>
            
            <button className={actionStyle.action_container_btn} onClick={() => rubikCube.scrambleRubikCube()}>         
              <div><FontAwesomeIcon icon={faRepeat} size='2x' /></div>     
              Scamble
            </button>
            
            {/* forcing to scramble first then providing solution as is static */}
            <button className={actionStyle.action_container_btn} onClick={() => {rubikCube.scrambleRubikCube(); rubikCube.setSolutionDisplayed(!rubikCube.solutionDisplayed)}}>
              <div><FontAwesomeIcon icon={faInfo} size='2x' /></div>     
              Solve
            </button>

            {rubikCube.solutionDisplayed && 
              <div className={actionStyle.action_container_solution}>
                Solution : D, L', B, U', R, F'
              </div>
            }
                    
          </div>

        </div>        
      </div>

    </div>  
  </>;
}

export default App;