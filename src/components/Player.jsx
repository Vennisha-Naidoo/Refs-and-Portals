import { useRef, useState } from "react";

export default function Player() {

  /*
    useRef does not execute the component again while useState does
  */

  const playerName = useRef(); //JavaScript Object

  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome { enteredPlayerName ?? 'unknown entity' }</h2>
      <p>
        <input 
        ref={ playerName } 
        type="text" />
        <button onClick={ handleClick }>Set Name</button>
      </p>
    </section>
  );
}
