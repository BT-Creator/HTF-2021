import Button from "../Button";
import React, {useState} from "react";
import {call} from "../../Helpers/api";

const CluedoBrute = () => {
    const [operations, setOperations] = useState([])
    const [rooms, setRooms] = useState([]);
    const [weapons, setWeapons] = useState([]);
    const [suspects, setSuspects] = useState([]);

    const bruteForce = () => {
        const gameId = call(process.env.REACT_APP_URL_NEW)
            .then(response => {
                setOperations(operations.concat("Got a new game"));
                return response.key
            })
            .catch(response => {
                setOperations(["Something went wrong ¯\\_(ツ)_/¯"])
                return undefined;
            })
        if (gameId) {
            try {
                call(process.env.REACT_APP_URL_CLUES)
                    .then(response => {
                        setRooms(response.filter(item => item.type === "room"));
                        setWeapons(response.filter(item => item.type === "weapon"));
                        setSuspects(response.filter(item => item.type === "suspect"));
                        setOperations(operations.push("Got all clues loaded & sorted"));
                    })
                    .then(() => {

                    })


            } catch (e) {
                setOperations(["Something went wrong ¯\\_(ツ)_/¯"])
            }

        }
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