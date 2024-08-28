import Player from './components/Player.jsx';
import { TimmerChallenge } from './components/TimmerChallenge.jsx';


function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        {/*Aqui mandamos el componente de los retos y le damos su titulo y el target time que sera los segundos que dura el challenge */}
        <TimmerChallenge title="Easy" targetTime={1} ></TimmerChallenge>

        <TimmerChallenge title="Not-Easy" targetTime={5} ></TimmerChallenge>

        <TimmerChallenge title="Getting tough" targetTime={10} ></TimmerChallenge>

        <TimmerChallenge title="Props Only" targetTime={15} ></TimmerChallenge>
      </div>
    </>
  );
}

export default App;
