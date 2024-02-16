import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import WelcomePage from './pages/Welcome.jsx';
import ChallengesPage from './pages/Challenges.jsx';

// damos el router, creamos 
const router = createBrowserRouter([

  // damos el path por defecto y damos el elemeento de bienvenida
  { path: '/', element: <WelcomePage /> },

  // damos otro path de los retos, su elemento la pagina de retos
  { path: '/challenges', element: <ChallengesPage /> },

]);

function App() {

  // retornamos el provider del router y le damos la propiedad de router
  return <RouterProvider router={router} />;

}

export default App;
