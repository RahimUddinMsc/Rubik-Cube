import React from 'react';
import './App.css';
import  style from './css/rubiks.module.css';
import DefaultCube from './components/DefaultCube';
import ExplodedCube from './components/ExplodedCube';

const App = () => {
  return <>  
    <div className={style.rubiks_container}>

      <div className={style.rubiks_container_header}>
          <h2>Rubiks Cube</h2>
      </div>

      <div className={style.rubiks_container_cube}>
        {true ? <DefaultCube/> : <ExplodedCube/>}


      </div>

      <div className={style.rubiks_container_actions}>

      </div>

    </div>  
  </>;
}

export default App;
