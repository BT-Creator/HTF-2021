import Button from "../Button";
import React, {useState} from "react";
import {call} from "../../Helpers/api";

const CluedoBrute = () => {
    const [operations, setOperations] = useState([])
    const bruteForce = () => {
        const gameId = call(process.env.REACT_APP_URL_NEW)
            .then(response => {
                setOperations(operations.concat("Got a new game"));
                return response.key
            })
            .catch(response => {
                setOperations(["Something went wrong ¯\\_(ツ)_/¯"])
                return null;
            })
    }

    return (
        <>
        <Button onClick={bruteForce} value={"Too hard?"}/>
        <div>
            <ul>
                {operations.map(op => <li>{op}</li>)}
            </ul>
        </div>
        </>
    )
}
export default CluedoBrute;