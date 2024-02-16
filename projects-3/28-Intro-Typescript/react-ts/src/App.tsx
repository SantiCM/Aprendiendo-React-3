import { NewTodo } from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos-context';


const App = () => {

  return (
  
    <div>

      {/* Damos el provider del context y damos los componentes */}

      <TodosContextProvider>

        <NewTodo></NewTodo>

        <Todos></Todos>

      </TodosContextProvider>
      
    </div>
  
  );

}

export default App;