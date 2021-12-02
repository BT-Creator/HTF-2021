import React, { useEffect, useState } from "react";
import {call} from "../../Helpers/api";

/*
   NOTEBOOK
   --------
   Lijst hier de verdachten, wapens en kamers op en maak aan de hand van de antwoorden op je suggesties een shortlist.
*/

export const NotebookContent = (notebookUpdate) => {
  const [clues, setClues] = useState([]);

  useEffect(() => {
    call(process.env.REACT_APP_URL_CLUES)
        .then(json => {
          let remove = notebookUpdate.notebookUpdate.notebookUpdate;
            let remainingClues = json.filter(item => item.title !== remove)
            setClues(remainingClues);
        })
  }, [notebookUpdate.notebookUpdate.notebookUpdate]);


  return( <div>
    {clues.map(item => {
      return <p key={item.id}>{item.title}</p>
    })}
  </div>);
};
