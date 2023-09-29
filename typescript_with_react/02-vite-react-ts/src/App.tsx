import Todos from './components/Todos'
import './App.css'
import {createTodo} from './models/todo'


function App() {
  const todos = [
    createTodo('Learn React'),
    createTodo('Learn ts')
  ]


  return (
    <>
      <Todos items={todos}/>
    </>
  )
}

export default App
