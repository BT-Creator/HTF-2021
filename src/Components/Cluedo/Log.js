import React, {useEffect, useState} from "react";
/*
   LOG
   ---------
   In dit component houd je de gemaakte suggesties bij.
*/

const Log = ({ logEntries }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    setLogs(logs.concat(logEntries));
    console.log(logs);
  }, [logEntries]);

  return (
    <div className="log-container">
      <h3>Gemaakte suggesties</h3>
      <p>Houd hier de gegeven suggesties bij.</p>
      {logs.map(log => {
        return <p>{log.suspect} met het volgende wapen: {log.weapon} in de {log.room} ({log.num_correct} keuzes waren juist, {log.incorrect} was verkeerd)</p>
      })}
    </div>
  );
};

export default Log;
