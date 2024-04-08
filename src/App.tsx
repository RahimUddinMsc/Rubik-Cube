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

      <div className={style.rubiks_container_header}>
          <h2>Rubiks Cube</h2>
      </div>

      <div className={style.rubiks_container_cube}>
        {rubikCube.explodedCube ? <ExplodedCube rubikCube={rubikCube.cubeData}/> : <DefaultCube rubikCube={rubikCube.cubeData}/>}
      </div>

      <div className={style.rubiks_container_actions}>
        <div className={actionStyle.action_container}>

          <div className={actionStyle.left_action_container}>
              <button onClick={() => rubikCube.setExplodedCube(!rubikCube.explodedCube)}>
                  Explode
              </button>
          </div>

          <CubeMovementActions cubeData={rubikCube.cubeData} setCubeData={rubikCube.setCubeData}/>

          <div className={actionStyle.right_action_container}>
              <button>
                  Solve
              </button>
          </div>

        </div>        
      </div>

    </div>  
  </>;
}

export default App;