// Permitives: number, string, boolean
// Moe complex types: arrays, objects
// Funtion types, parameters

let age: number;

age = 12;

let userName: string;

userName = 'Max'

let isInstructor: boolean;

isInstructor = true


// More Compoex types

let hobbies: string[];

hobbies = ['Sports', 'Music', 'Cooking']

// 중요! 타입별칭 : 중복되는 타입형식을 제거

type Person = {
    name: string;
    age: number;
}

let person: Person;

person = {
    name: 'max',
    age: 32
};

// person = {
//     isEmployee: true
// }

let people: Person[];

people = [
    {name: 'a', age: 12}
]

// Type inference : 타입 추론
// 먼저 정의하기
// union : 여러개의 타입 = | 
let course: string | number | boolean = 'React - The Complete Guide'

course = 12341;

// Function & type
function add(a:number, b:number) {
    return a + b;
}

// print 내부함수와 충돌 => 에러
// 반환값이 없는 경우 void
function print(value: any) {
    console.log(value)
}

// Generics : 제너릭
// 함수안에서만 사용할 수 있는 타입 정의
// any타입이 아니란걸 알려줌, array와 value를 통해
// return 값도 T 타입인걸 알려줌
function insertAtBeginning<T>(array:T[], value: T) {
    const newArray = [value, ...array];
    return newArray

}

const demoArray = [1, 2, 3]
const updatedArray = insertAtBeginning(demoArray, -1) // [-1, 1, 2, 3]
const stringArray = insertAtBeginning<string>(['a', 'b', 'c'], 'd')
// 문자열인지 숫자인지 알수 없다
updatedArray[0].split('') // return number
stringArray[0].split('') // return string


// Array도 제너릭
let number: Array<number> = [1, 2, 3]
let number2: number[] = [1, 2, 3]
