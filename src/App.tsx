import './App.css';
import style from './css/rubiks.module.css';
import DefaultCube from './components/DefaultCube';
import ExplodedCube from './components/ExplodedCube';
import useRubikCube from './hooks/useRubikCube';
import CubeActions from './components/CubeActions';

const App = () => {
  const rubikCube = useRubikCube();

  return <>  
    <div className={style.rubiks_container}>

      <div className={style.rubiks_container_header}>
          <h2>Rubiks Cube</h2>
      </div>

      <div className={style.rubiks_container_cube}>
        {true ? <DefaultCube rubikCube={rubikCube}/> : <ExplodedCube rubikCube={rubikCube}/>}

      </div>

      <div className={style.rubiks_container_actions}>
        <CubeActions/>
      </div>

    </div>  
  </>;
}

export default App;