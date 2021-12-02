import React, {useEffect, useState} from "react";
import { useSettings } from "../context/useSettings";
import {call} from "../../Helpers/api";
import Button from "../Button";

/*
   SUGGESTIE FORMULIER
   -------------------
   Maak hier een formulier om een suggestie te verrichten.
*/

export const MakeSuggestionForm = ({ gameKey, selectedRoom }) => {
  const { settings } = useSettings();
  const [rooms, setRooms] = useState([]);
  const [weapons, setWeapons] = useState([]);
  const [suspects, setSuspects] = useState([]);

  useEffect(() => {
    call(process.env.REACT_APP_URL_CLUES)
        .then(response => {
            return setRooms(response.filter(item => item.type === "room"));
        })

    call(process.env.REACT_APP_URL_CLUES)
    .then(response => {
        return setWeapons(response.filter(item => item.type === "weapon"));
    })

    call(process.env.REACT_APP_URL_CLUES)
    .then(response => {
        return setSuspects(response.filter(item => item.type === "suspect"));
    })
}, [])

  return (
    <div>
      <h2>Maak een suggestie</h2>
      <p>Maak een formulier om een suggestie te maken.</p>
      <h3>Kamers</h3>
    </div>
  );
};
