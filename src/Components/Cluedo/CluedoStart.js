import React from "react";
import {useSettings} from "../context/useSettings";
import Button from "../Button";
import {call} from "../../Helpers/api";

/*
   CLUEDO START
   ------------
   In dit component moet je een nieuw spel genereren via de api.
   Geef de nieuwe gameKey mee aan de onStart functie (zie props).
*/

const CluedoStart = ({ onStart }) => {
  const { settings } = useSettings();

  const startGame = () => {
      call(process.env.REACT_APP_URL_NEW).then(response => onStart(response.key));
  };

  return (
    <div className={"file full"}>
      <h2>Cluedo</h2>
      <Button onClick={startGame} value="Start een nieuw spel" />
    </div>
  );
};

export default CluedoStart;
