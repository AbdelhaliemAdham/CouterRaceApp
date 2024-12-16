import { useState, useRef } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const playerRef = useRef(null);

  function handlePlayerName(event) {
    setPlayerName(event.target.value);
  }

  function handleClickButton() {
    playerRef.current = playerName; // Store the name in the ref
    setPlayerName(""); // Clear the input after setting the name
  }

  return (
    <section id="player">
      <h2>Welcome {playerRef.current || "unknown entity"}</h2>
      <p>
        <input type="text" value={playerName} onChange={handlePlayerName} />
        <button onClick={handleClickButton}>Set Name</button>
      </p>
    </section>
  );
}
