import React from "react";
import "./App.css";
import { SettingsProvider } from "./Components/context/SettingsProvider";
import { Main } from "./Components/Main";

const App = () => (
  <SettingsProvider>
    <Main />
  </SettingsProvider>
);

export default App;
