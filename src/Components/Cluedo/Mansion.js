import React, {useEffect, useState} from "react";
import {call} from "../../Helpers/api";
import Button from "../Button";

/*
   HET HUIS
   --------
   Bouw het huis en gebruik onSelectRoom bij klikken op een kamer.
*/

export const Mansion = ({onSelectRoom}) => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        call(process.env.REACT_APP_URL_CLUES)
            .then(response => {
                return setRooms(response.filter(item => item.type === "room"));
            })
    }, [])

    return (
        <>
            <h3>Kamers</h3>
            <div className={"cluedo-btn-box"}>
                {rooms.map(room => <Button value={room.title} onClick={() => onSelectRoom(room)} key={room.id}>{room.title}</Button>)}
            </div>
        </>
    )

};
