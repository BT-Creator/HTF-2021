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

export const MakeSuggestionForm = ({ gameKey, selectedRoom }) => {
  const { settings } = useSettings();

  function HandleSubmit(event){
    console.log(event);
  }

  return (
    <div>
      <h2>Maak een suggestie</h2>
      <p>Maak een formulier om een suggestie te maken.</p>
      <h3>Kamers</h3>
      <BaseForm OnSubmit={HandleSubmit} ></BaseForm>
    </div>
  );
};
