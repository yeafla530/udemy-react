// 데이터 모델 정의

export interface Todo {
    id: string;
    text: string;
}

export function createTodo(todoText: string): Todo {
    const id = new Date().toISOString();
    const todoItem: Todo = {
      id,
      text: todoText,
    };
    
    return todoItem;
}

// class 방식
// ts에서 사용할 때 type정의해주어야함 

// class Todo2 {
//     id: string;
//     text: string;

//     constructor(todoText: string) {
//         this.text = todoText;
//         this.id = new Date().toISOString();
//     }
// }

// 단일 항목만 export 가능
// export default Todo2