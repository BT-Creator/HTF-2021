import React from "react";
import { useSettings } from "../context/useSettings";

/*
   SUGGESTIE FORMULIER
   -------------------
   Maak hier een formulier om een suggestie te verrichten.
*/

export const MakeSuggestionForm = ({ gameKey, selectedRoom }) => {
  const { settings } = useSettings();

   function HandleSubmit(event){
    event.preventDefault();
    console.log(event);
  }

  return (
    <div>
      <h2>Maak een suggestie</h2>
      <p>Maak een formulier om een suggestie te maken.</p>
      <h3>Kamers</h3>
    </div>
  );
};
