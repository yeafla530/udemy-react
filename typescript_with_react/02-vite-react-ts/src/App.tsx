import Todos from './components/Todos'
import NewTodo from './components/NewTodo'
import './App.css'
import {TodosContextProvider} from './store/todos-context'
// import {Todo, createTodo} from './models/todo'
// import { useState } from 'react'

function App() {


  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  )
}

export default App
