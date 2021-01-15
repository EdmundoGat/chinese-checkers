import './App.css';
import LocalBoard from './components/LocalBoard';
import CheckIn from './components/CheckIn';
import { useState } from 'react';

function App() {

  const [gameMode, setGameMode] = useState();

  function renderGameMode(gameMode){

    if(gameMode === undefined) 
      return(
        <div>
          <button
            onClick = {() => {
              setGameMode('local');
            }}
          >
            Local Game
          </button>
          <button
            onClick = {() => {
              setGameMode('remote');
            }}
          >
            Remote Game
          </button>
        </div>
      );
    
    if(gameMode === "local")
      return <LocalBoard/>;
    else
      return <CheckIn/>;
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Monas chinas</h1>
        {renderGameMode(gameMode)}
      </header>
    </div>
  );
}

export default App;
