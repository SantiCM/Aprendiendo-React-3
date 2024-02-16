import { combineReducers } from "redux";

import {mat, mac, makefetching, makeSetReducer, reduceReducers, makeCrudReducer, asyncMac} from "./utilities"

const asyncTodos = mat("todos")


const [setPending, setFulfilled, setError] = asyncMac(asyncTodos)

export const setComplete = mac("todos/complete", "payload")

export const setFilter = mac("filtler/set", "payload")


export const fetchThunk = () => async (dispatch) => {

  dispatch(setPending);

  try {

    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    const data = await response.json();

    const todos = data.slice(0, 10);

    dispatch(setFulfilled(todos));

  } catch (e) {

    dispatch(setError(e.message));

  }
}

export const filterReducer = makeSetReducer (["filter/set"])


export const fetching = makefetching(asyncTodos) 

const fulfilledReducer = makeSetReducer(["todos/fulfilled"])

const crudeReducer = makeCrudReducer(["todo/add", "todo/complete"])

export const todosReducer = reduceReducers(crudeReducer, fulfilledReducer)

export const reducer = combineReducers({

  todos: combineReducers({ 

    entities: todosReducer,

    status: fetching,
  }),

  filter: filterReducer,
})

export const selectTodos = state => {
  const {todos: {entities}, filter} = state

  if(filter === "complete" ) {
    return entities.filter(todo => todo.completed)
  }

  if(filter === "incomplete" ) {
    return entities.filter(todo => !todo.completed)
  }

  return entities
}

export const selectStatus = state => state.todos.status