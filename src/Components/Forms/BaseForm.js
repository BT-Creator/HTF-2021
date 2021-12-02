import React, {useEffect, useState} from "react";
import {call} from "../../Helpers/api";
import Button from "../Button";

export const BaseForm = ({onSubmitForm}) => {
    const [rooms, setRooms] = useState([]);
    const [weapons, setWeapons] = useState([]);
    const [suspects, setSuspects] = useState([]);

    useEffect(() => {
        call(process.env.REACT_APP_URL_CLUES)
            .then(response => {
                return setRooms(response.filter(item => item.type === "room"));
            })

        call(process.env.REACT_APP_URL_CLUES)
            .then(response => {
                return setWeapons(response.filter(item => item.type === "weapon"));
            })

        call(process.env.REACT_APP_URL_CLUES)
            .then(response => {
                return setSuspects(response.filter(item => item.type === "suspect"));
            })
    }, [])

    return (
        <form name="suggestForm" id="suggestForm" onSubmit={onSubmitForm}>
            <h3>Kamer</h3>
            <select name="room" id="room">
                {rooms.map(room => {
                    return (<option value={room.id} key={room.id}>{room.title}</option>)
                })}
            </select>
            <h3>Wapens</h3>
            <select name="weapon" id="weapon">
                {weapons.map(weapon => {
                    return (<option value={weapon.id} key={weapon.id}>{weapon.title}</option>)
                })}
            </select>
            <h3>Verdachten</h3>
            <select name="suspect" id="suspect">
                {suspects.map(suspect => {
                    return (<option value={suspect.id} key={suspect.id}>{suspect.title}</option>)
                })}
            </select>
            <Button type="submit" id="suggestSubmit" value="Submit">Submit</Button>
        </form>
    )
}