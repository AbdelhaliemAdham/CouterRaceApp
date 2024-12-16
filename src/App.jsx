import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"Easy Challenge"} targetTime={1} />
        <TimerChallenge title={"Not Easy"} targetTime={2} />
        <TimerChallenge title={"Difficult Challenge"} targetTime={5} />
        <TimerChallenge title={"Very Difficult Challenge"} targetTime={10} />
      </div>
    </>
  );
}

export default App;
