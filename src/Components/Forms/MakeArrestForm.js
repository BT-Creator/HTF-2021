import React from "react";
import { useSettings } from "../context/useSettings";
import {BaseForm} from "./BaseForm";
import {call} from "../../Helpers/api";

/*
   HET ARRESTATIE FORMULIER
   ------------------------
   Maak hier een formulier om een arrestatie te verrichten.
*/

export const MakeArrestForm = ({ gameKey, onArrest }) => {
  const { settings } = useSettings();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    call(`${process.env.REACT_APP_URL_ACCUSE}?key=${gameKey}`, 'POST', {
        room: evt.target[0].value,
        weapon: evt.target[1].value,
        suspect: evt.target[2].value
    })
        .then(onArrest)
  }
  return (
    <div>
      <h2>Maak een arrestatie</h2>
      <BaseForm onSubmitForm={handleSubmit}/>
    </div>
  );
};
