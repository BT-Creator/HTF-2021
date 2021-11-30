import { Switch } from "react-router-dom";
import React, { useCallback, useState } from "react";
import CluedoActive from "./CluedoActive";
import GameOver from "./CluedoEnd";
import CluedoStart from "./CluedoStart";
import { useSettings } from "../context/useSettings";

const Cluedo = () => {
  const { settings } = useSettings();

  const [gameKey, setKey] = useState(null);
  const [gameOver, setGameOver] = useState(null);

  const handleEndGame = useCallback(() => {
    setKey(null);
    setGameOver(null);
  }, []);

  return settings ? (
    <Switch>
      {!gameKey && <CluedoStart onStart={setKey} />}
      {gameOver && <GameOver outcome={gameOver} />}
      <CluedoActive
        gameKey={gameKey}
        onEndGame={handleEndGame}
        onArrest={setGameOver}
      />
    </Switch>
  ) : null;
};

export default Cluedo;
