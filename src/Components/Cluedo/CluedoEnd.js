import React from "react";
import {Link, Redirect} from "react-router-dom";

/*
   GAME OVER
   ---------
   In dit component bouw je het endgame scherm.
*/

const GameOver = (props) => {
    const accusation = props.outcome.accusation
    const solution = props.outcome.solution

    return (
        <div className="full file">
            <h2>{props.outcome.message}</h2>
            <div style={{display: "flex", flexFlow: "row wrap", gap: "2rem", justifyContent: "space-around"}}>
                <section>
                    <h3>Wat jij hebt ingegeven:</h3>
                    <ul>
                        <li><span style={{fontWeight: "bold"}}>Kamer </span>{accusation.room}</li>
                        <li><span style={{fontWeight: "bold"}}>Wapen </span>{accusation.weapon}</li>
                        <li><span style={{fontWeight: "bold"}}>Verdachte </span>{accusation.suspect}</li>
                    </ul>
                </section>
                <section>
                    <h3>Wat het juiste antwoord was:</h3>
                    <ul>
                        <li><span style={{fontWeight: "bold"}}>Kamer </span>{solution.room}</li>
                        <li><span style={{fontWeight: "bold"}}>Wapen </span>{solution.weapon}</li>
                        <li><span style={{fontWeight: "bold"}}>Verdachte </span>{solution.suspect}</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default GameOver;
