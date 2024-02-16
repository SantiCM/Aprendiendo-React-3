import { Header } from "./components/Header/Header.jsx"
import { CoreConcepts } from "./components/CoreConcepts/CoreConcepts.jsx";
import { Examples } from "./components/Exampless/Examples.jsx";

const App = () => {

  return (
  
    <>
    
      <Header></Header>

      <main>

        <CoreConcepts></CoreConcepts>

        <Examples></Examples>
    
      </main>

    </>
  
  );

}

export default App;