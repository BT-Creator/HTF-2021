import React, { useState } from "react";
import { SettingsContext } from "./SettingsContext";

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState();
  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
