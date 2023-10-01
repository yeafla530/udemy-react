import styled from "styled-components"

const TodoList = styled.li`
    margin: 1rem 0;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    background-color: #f7f5ef;
`

// Todo에서 bind했기 때문에 따로 매개변수를 주지 않아도 된다
function TodoItems(props: {text: string; onRemoveTodo: ()=>void}) {
    
    
    return <TodoList onClick={props.onRemoveTodo}> {props.text}</TodoList>
}

export default TodoItems