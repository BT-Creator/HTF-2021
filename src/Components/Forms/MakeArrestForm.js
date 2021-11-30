import React from "react";
import { useSettings } from "../context/useSettings";

/*
   HET ARRESTATIE FORMULIER
   ------------------------
   Maak hier een formulier om een arrestatie te verrichten.
*/

export const MakeArrestForm = ({ gameKey, onArrest }) => {
  const { settings } = useSettings();

  return (
    <div>
      <h2>Maak een arrestatie</h2>
      <p>Maak een formulier om een arrestatie te maken.</p>
    </div>
  );
};
