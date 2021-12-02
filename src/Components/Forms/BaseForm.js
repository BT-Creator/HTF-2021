export const BaseForm = () => {
    return (
        <form name="suggestForm" id="suggestForm">
        <select name="room" id="room">
          {rooms.map(room => {
            return (<option value={room.id}>{room.title}</option>)
          })}
        </select>
        <h3>Wapens</h3>
        <select name="weapon" id="weapon">
          {weapons.map(weapon => {
            return (<option value={weapon.id}>{weapon.title}</option>)
          })}
        </select>
        <h3>Verdachten</h3>
        <select name="suspect" id="suspect">
          {suspects.map(suspect => {
            return(<option value={suspect.id}>{suspect.title}</option>)
          })}
        </select>
        <input type="submit" id="suggestSubmit" value="Submit"/>
      </form>
    )
}