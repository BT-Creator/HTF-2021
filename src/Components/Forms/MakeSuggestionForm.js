import React, {useEffect, useState} from "react";
import { useSettings } from "../context/useSettings";
import {call} from "../../Helpers/api";
import Button from "../Button";
import { BaseForm } from "./BaseForm";

/*
   SUGGESTIE FORMULIER
   -------------------
   Maak hier een formulier om een suggestie te verrichten.
*/

export const MakeSuggestionForm = ({ gameKey, selectedRoom, onSuggestion }) => {
  const { settings } = useSettings();
  const [weapons, setWeapons] = useState([]);
  const [suspects, setSuspects] = useState([]);

  useEffect(() => {
    call(process.env.REACT_APP_URL_CLUES)
        .then(response => {
          setWeapons(response.filter(item => item.type === "weapon"));
          setSuspects(response.filter(item => item.type === "suspect"));
        })
  }, []);

  const HandleSubmit = (event) => {
    event.preventDefault();
    let guess = {
      room: selectedRoom.id,
      weapon: event.target[0].value,
      suspect: event.target[1].value
    }
    call(`${process.env.REACT_APP_URL_SUGGEST}?key=${gameKey}`, "POST", guess)
    .then( (response) => {
      onSuggestion();
    })
  }

  return (
    <div>
      <h2>Maak een suggestie</h2>
      <p>Maak een formulier om een suggestie te maken.</p>
      <form name="suggestForm" id="suggestForm" onSubmit={HandleSubmit}>
        <h3>Wapens</h3>
        <select name="weapon" id="weapon">
          {weapons.map(weapon => {
            return (<option value={weapon.id} key={weapon.id}>{weapon.title}</option>)
          })}
        </select>
        <h3>Verdachten</h3>
        <select name="suspect" id="suspect">
          {suspects.map(suspect => {
            return(<option value={suspect.id} key={suspect.id}>{suspect.title}</option>)
          })}
        </select>
        <Button type="submit" id="suggestSubmit" value="Submit">Submit</Button>
      </form>
    </div>
  );
}
