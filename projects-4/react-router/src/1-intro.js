import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/portafolio" element={<h1>Portafolio</h1>}></Route>
          <Route path="/" element={<h1>Inicio</h1>}></Route>
        </Routes>
      </section>
    </div>
  );
}

//export default App;
