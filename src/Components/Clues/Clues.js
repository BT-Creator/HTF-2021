import React, {useEffect} from "react";
import {call} from "../../Helpers/api";

/*
   AANWIJZINGEN
   ------------
   Lijst hier de kamers, wapens en verdachten op.
*/

const Clues = () => {
    useEffect(() => {
        console.log(call(process.env.REACT_APP_URL_CLUES));
    })

    return (
        <div className="full file">
            <h2>Aanwijzingen</h2>
            <div>Lijst hier de kamers, wapens en verdachten op.</div>
        </div>
    );
};

export default Clues;
