import "./App.css";
import { Authentication } from "./components/auth/Auth";

function App() {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className=" text-4xl font-extrabold">Aprendiendo Firebase</h1>
      <Authentication />
    </div>
  );
}

export default App;
