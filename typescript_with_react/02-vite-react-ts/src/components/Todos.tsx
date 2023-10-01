import TodoItems from './TodoItems'
import styled from 'styled-components';
import {useContext} from 'react'
import {TodosContext} from '../store/todos-context'

// vite에서는 css module사용안함
// "Zero Config"에 따라 간단한 설정으로 개발 환경을 구성하고 최적화된 빌드를 제공하기 위함
// import classes from  './Todos.modules.css'

const TodoUl = styled.ul`
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    width: 40rem;
`


// 제너릭 사용
function Todos() {
    const todosCtx = useContext(TodosContext)
    return (
        <TodoUl>
            {todosCtx.items.map((item) => (
                // bind: 실행할 함수 미리 설정 가능
                <TodoItems key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}/>
            ))}
        </TodoUl>
    ) 
}

export default Todos