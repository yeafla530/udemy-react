import React, {useState} from 'react'
import {Todo, createTodo} from '../models/todo'

type TodosContextObject = {
    items: Todo[];
    addTodo: (text:string)=>void;
    removeTodo: (id:string)=>void;
}

// context에 인수 1개 넣기
export const TodosContext = React.createContext<TodosContextObject>({
    items: [],
    addTodo: () => {},
    removeTodo: () => {}
})

// state 관리
export function TodosContextProvider(props: React.PropsWithChildren) {
     // usestate([])로 설정하면 todos는 처음에 never[]타입을 가진다
    // 이는 []이 계속 비어있어야한다는 뜻
    const [todos, setTodos] = useState<Todo[]>([]);
    

    const addTodoHandler = (text: string) => {
        const newTodo = createTodo(text)

        setTodos((prevTodos) => {
        return [newTodo, ...prevTodos]
        })
    }


    const removeHandler = (todoId: string) => {
        setTodos((prevTodos) => {
        return prevTodos.filter(todo => todo.id !== todoId)
        })
    }

    const contextValue: TodosContextObject = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeHandler
    }

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}
