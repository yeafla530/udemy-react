import {Todo} from '../models/todo'

// 제너릭 사용
function Todos(props: {items: Todo[]}) {
    return (
        <ul>
            {props.items.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    ) 
}

export default Todos