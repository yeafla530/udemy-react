// 사용자에게 입력창을 주고
// 사용자가 입력한 Todo내용 가져온다

// useState: 키가 눌릴 때마다 이벤트 수신하는 방식
// Ref: 한번에 입력을 가져오는 방식
import {useRef, useContext} from 'react'
import {TodosContext} from '../store/todos-context';
import styled from 'styled-components';

const InputForm = styled.form`
    width: 40rem;
    margin: 2rem auto;
`

const Label = styled.label`
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
`
  
const Input = styled.input`
    display: block;
    width: 100%;
    font: inherit;
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 4px;
    background-color: #f7f5ef;
    border: none;
    border-bottom: 2px solid #494844;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    margin-bottom: 0.5rem;
`
  
const FormButton = styled.button`
    font: inherit;
    background-color: #ebb002;
    border: 1px solid #ebb002;
    color: #201d0f;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;

    &:hover,
    &active {
        background-color: #ebc002;
        border-color: #ebc002;
    }
`



// void: 아무것도 반환하지 않음
function NewTodo() {
    const todosCtx = useContext(TodosContext)
    // 타입정의 필요
    // useRef도 제너릭 -> 인터페이스값과 초기값 null을 설정
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    // form제출을 통해 
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault() // 페이지 리로딩방지

        // 사용하려는 시점에 아직 값이 설정되지 않을 수 있기 때문에 ?.사용
        // 접근이 가능하면 value를 가져와!
        //옵셔널 체이닝 연산자(?.) 뒤에 널 병합 연산자(??)를 사용하여, 
        // 만약 todoTextInputRef.current?.value가 undefined인 경우 빈 문자열('')로 대체
        const enteredText = todoTextInputRef.current?.value ?? '';

        // 입력된 값이 없다면
        if (enteredText?.trim().length === 0) {
            // error
            return;
        }
        
        todosCtx.addTodo(enteredText)
    }

    return (
        <InputForm onSubmit={submitHandler}>
            <Label htmlFor='text'>Todo Text</Label>
            <Input type="text" id='text' ref={todoTextInputRef}/>
            <FormButton>Add Todo</FormButton>
        </InputForm>
    )
}

export default NewTodo