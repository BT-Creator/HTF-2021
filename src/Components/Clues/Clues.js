import React, {useEffect, useState} from "react";
import {call} from "../../Helpers/api";

/*
   AANWIJZINGEN
   ------------
   Lijst hier de kamers, wapens en verdachten op.
*/

const Clues = () => {
  let [clues, setClues] = useState([]);
  let [rooms, setRooms] = useState([]);
  let [suspects, setSuspects] = useState([]);
  let [weapons, setWeapons] = useState([]);

    useEffect(() => {
        call(process.env.REACT_APP_URL_CLUES)
        .then(json => {
            setClues(json);
        })
    }, [])

    return (
      <div className="full file">
          <h2>Aanwijzingen</h2>
          <div>Lijst hier de kamers, wapens en verdachten op.</div>
          <h3>Kamers</h3>
          <ul>
            {clues.filter(clue => clue.type === "room").map(room => {
              return <li>{room.title}</li>;
            })}
          </ul>

          <h3>Weapons</h3>
          <ul>
            {clues.filter(clue => clue.type === "weapon").map(weapon => {
              return <li>{weapon.title}</li>;
            })}
          </ul>

          <h3>Suspects</h3>
          <ul>
            {clues.filter(clue => clue.type === "suspect").map(suspect => {
              return <li>{suspect.title}</li>;
            })}
          </ul>
      </div>
  );
};

export default Clues;
