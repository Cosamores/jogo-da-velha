import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onNameChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [ playerName, setPlayerName ] = useState(initialName);

  const clickHandler = () => {
      setIsEditing((editing) => !isEditing);

      if(isEditing){
        onNameChange(symbol, playerName);
      }
    }

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && <input type="text" required onChange={handleChange}/>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={clickHandler}>{isEditing ? 'Salvar' : 'Editar nome'}</button>
    </li>
  );
}
