import React, {useEffect, useState} from "react";
import Log from "./Log";
import Button from "../Button";
import { Mansion } from "./Mansion";
import Notebook from "../Notebook/Notebook";
import { MakeSuggestionForm } from "../Forms/MakeSuggestionForm";
import { MakeArrestForm } from "../Forms/MakeArrestForm";

/*
   CLUEDO ACTIVE
   -------------
   Dit is het hart van het spel. We hebben reeds wat basis logica en flow klaargezet, aan jullie om de juiste invulling te geven.
*/

const CluedoActive = ({ gameKey, onEndGame, onArrest }) => {
  const [log, setLog] = useState([]);
  const [room, setRoom] = useState(null);
  const [isArrest, setIsArrest] = useState(false);
  const [notebookUpdate, setNotebookUpdate] = useState('');

  return (
    <div className="file full">
      {room && (
        <MakeSuggestionForm
          gameKey={gameKey}
          selectedRoom={room}
          onSuggestion={(response) => {
            setLog(response)
            setNotebookUpdate(response.incorrect)
            setRoom(null)}}
        />
      )}
      {isArrest && <MakeArrestForm gameKey={gameKey} onArrest={onArrest} />}
      {!room && !isArrest && (
        <div>
          <h2>Cluedo</h2>
          <Mansion onSelectRoom={setRoom} />
          <div className="cluedo-btn-box">
            <Button value="Maak arrestatie" onClick={() => setIsArrest(true)} />
            <Button value="Spel Stoppen" onClick={onEndGame} />
          </div>
        </div>
      )}
      <Log logEntries={log} />
      <Notebook notebookUpdate={notebookUpdate} />
    </div>
  );
};

export default CluedoActive;
