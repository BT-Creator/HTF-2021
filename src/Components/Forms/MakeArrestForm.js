import React, {useEffect, useState} from "react";
import { useSettings } from "../context/useSettings";
import {call} from "../../Helpers/api";
import Button from "../Button";

/*
   HET ARRESTATIE FORMULIER
   ------------------------
   Maak hier een formulier om een arrestatie te verrichten.
*/

export const MakeArrestForm = ({ gameKey, onArrest }) => {
  const { settings } = useSettings();

    const [rooms, setRooms] = useState([]);
    const [weapons, setWeapons] = useState([]);
    const [suspects, setSuspects] = useState([]);

    useEffect(() => {
        call(process.env.REACT_APP_URL_CLUES)
            .then(response => {
                setRooms(response.filter(item => item.type === "room"));
                setWeapons(response.filter(item => item.type === "weapon"));
                setSuspects(response.filter(item => item.type === "suspect"));
            })
    }, [])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    call(`${process.env.REACT_APP_URL_ACCUSE}?key=${gameKey}`, 'POST', {
        room: evt.target[0].value,
        weapon: evt.target[1].value,
        suspect: evt.target[2].value
    })
        .then(response => onArrest(response))
  }
  return (
    <div>
      <h2>Maak een arrestatie</h2>
        <form name="suggestForm" id="suggestForm" onSubmit={handleSubmit}>
            <h3>Kamer</h3>
            <select name="room" id="room">
                {rooms.map(room => {
                    return (<option value={room.id} key={room.id}>{room.title}</option>)
                })}
            </select>
            <h3>Wapens</h3>
            <select name="weapon" id="weapon">
                {weapons.map(weapon => {
                    return (<option value={weapon.id} key={weapon.id}>{weapon.title}</option>)
                })}
            </select>
            <h3>Verdachten</h3>
            <select name="suspect" id="suspect">
                {suspects.map(suspect => {
                    return (<option value={suspect.id} key={suspect.id}>{suspect.title}</option>)
                })}
            </select>
            <Button type="submit" id="suggestSubmit" value="Submit">Submit</Button>
        </form>
    </div>
  );
};
