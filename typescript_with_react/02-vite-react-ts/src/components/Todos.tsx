import {Todo} from '../models/todo'
import TodoItems from './TodoItems'

// 제너릭 사용
function Todos(props: {items: Todo[]}) {
    return (
        <ul>
            {props.items.map((item) => (
                <TodoItems key={item.id} text={item.text}/>
            ))}
        </ul>
    ) 
}

export default Todos