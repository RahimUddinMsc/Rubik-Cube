import './App.css';
import style from './css/rubiks.module.css';
import DefaultCube from './components/DefaultCube';
import ExplodedCube from './components/ExplodedCube';
import useRubikCube from './hooks/useRubikCube';
import CubeMovementActions from './components/CubeActions';
import actionStyle from './css/cubeAction.module.css'

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
          <h2>Rubiks Cube</h2>
      </div>    
    
      <div id="rubiks_container_cube" className={style.rubiks_container_cube}>              
        {rubikCube.explodedCube ? <ExplodedCube rubikCube={rubikCube.cubeData}/> : <DefaultCube rubikCube={rubikCube.cubeData}/>}
      </div>

      <div className={style.rubiks_container_actions}>
        <div className={actionStyle.action_container}>

          <div className={actionStyle.left_action_container}>
              <button id="rubiks_view_toggle" onClick={() => rubikCube.setExplodedCube(!rubikCube.explodedCube)}>
                  {rubikCube.explodedCube ? <>Contract</> : <>Explode</>}
              </button>
          </div>

          <CubeMovementActions cubeData={rubikCube.cubeData} setCubeData={rubikCube.setCubeData}/>

          <div className={actionStyle.right_action_container}>

            <button onClick={() => rubikCube.scrambleRubikCube()}>
              Scamble
            </button>
            
            {/* forcing to scramble first then providing solution as is static */}
            <button onClick={() => {rubikCube.scrambleRubikCube(); rubikCube.setSolutionDisplayed(!rubikCube.solutionDisplayed)}}>
              Solve
            </button>

            {rubikCube.solutionDisplayed && 
              <div>
                D, L', B, U', R, F'
              </div>
            }
                    
          </div>

        </div>        
      </div>

    </div>  
  </>;
}

export default App;