import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import RootLayout from './pages/Root';
import { lazy, Suspense } from 'react';

/* Forma de utilizar lazy
  Lazy se utiliza para dar una mejor experencia al usuario a la hora de cargar todo el codigo

*/

// se manda el lazy y le damos una funcion donde damos el import y damos la linea que tiene que seguir
// para encontrar el archivo

// Pasamos de esto
//import BlogPage, { loader as postsLoader } from './pages/Blog';
//import PostPage, { loader as postLoader } from './pages/Post';

// a esto

const BlogPage = lazy(() => import("./pages/Blog"))

const PostPage = lazy(() => import("./pages/Post"))

const router = createBrowserRouter([
  
  {
  
    path: '/',
  
    element: <RootLayout />,
  
    children: [
  
      {
  
        index: true,
  
        element: <HomePage />,
  
      },
  
      {
  
        path: 'posts',
  
        children: [
  
          { index: true, 

            // se manda el suspense que es un hook para esperar a que este componente se ejecute y damos
            // el archivo ya importado de lazy
            element: <Suspense fallback={<p>Loanding....</p>}><BlogPage /></Suspense> , 

            // damos una funcion donde damos el import, le damos el then y mandamos una funcion donde el module sera el loader
            loader: () => import("./pages/Blog").then(module => module.loader()) 
          
          },
  
          { 
            
            path: ':id', 
            
            element: <Suspense fallback={<p>Loanding....</p>}><PostPage /></Suspense>, 
            
            loader: (meta) => import("./pages/Post").then(module => module.loader(meta))
          
          },
  
        ],
  
      },
  
    ],
  
  },

]);

function App() {
  
  return <RouterProvider router={router} />;

}

export default App;
