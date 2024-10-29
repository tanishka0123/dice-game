import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [isstarted, setStarted] = useState(false);
  const togglegame = () => {
    setStarted(!isstarted);
  };
  return (
    <>
      {isstarted ? (
        <>
          <GamePlay></GamePlay>
        </>
      ) : (
        <>
          <StartGame togglegame={togglegame}></StartGame>
        </>
      )}
    </>
  );
}
 
export default App;
