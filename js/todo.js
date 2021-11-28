const todoForm = document.getElementById("todo-form");
const todolist = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input")
const todoskey = "todos"

let todos = [] //Todos array 초기화, 실질적으로 데이터를 저장해주는 장소임

function savetodos() {
    localStorage.setItem(todoskey, JSON.stringify(todos)) //array를 문자엻화해서 로컬스토리지에 저장
}


function delToDo(event) { //버튼의 이벤트리스너
    const li = event.target.parentElement //event는 현재 어떤 버튼이 클릭되었는지 알려줄 수 있다. 
    //target은 클릭된 html element를 의미한다.
    //parentelement는 클릭된 element의 부모요소이다.
    //Parentelement에서 부모요소가 뭔지 알 수 있다. 
    
    li.remove(); //span과 delbtn의 부모요소li자체를 삭제함으로서 자식요소인 delbtn과 span을 삭제

    //삭제시, todo array도 삭제해줘야한다.
    //filter로 삭제하고 새로운 어레이를 만들어버리자.
    //filter는 array의 각 요소에 true or false를 반환하는 함수를 적용해 true를 반환한 요소만으로 새로운 배열을 만든다. 

    todos = todos.filter((todo) => todo.id !== Number(li.id)) //필터함수로 todos.id 가 li.id가 아닌 것들만 todos배열로 업데이트
    savetodos() //업데이트한 todos를 localstorage에 저장.

}



function paintToDo(newTodo) { //Newtodo가 입력되면 html에 그리는 함수
    const li = document.createElement('li'); //li > span,btn만드는 객체생성,
    li.id = newTodo.id

    const span = document.createElement("span")
    span.innerText = newTodo.text//매개변수 newTodo를 작성
    span.classList.add('newtodo')

    const delbtn = document.createElement("button")
    delbtn.innerText = "✖︎" //버튼그리기
    delbtn.classList.add('delbtn')
    delbtn.addEventListener('click', delToDo) //각 버튼에 이벤트리스너함수 실행

    li.appendChild(span) //li > span,btn
    li.appendChild(delbtn)
    todolist.appendChild(li) //ul > li > span,btn

}


function handleToDoSubmit(event) { //1.todoForm이 submit되면 실행되는 함수
    event.preventDefault(); //새로고침방지
    const newToDo = todoInput.value //입력값을 변수에 저장
    todoInput.value = "" //input의 값을 초기화

    const newToDoObj =  {
        text: newToDo,
        id: Date.now(),
    }

    todos.push(newToDoObj)
    paintToDo(newToDoObj) //그리는함수불러오기
    savetodos(); //함수불러오기
}


todoForm.addEventListener("submit", handleToDoSubmit)





const savedToDos = localStorage.getItem(todoskey)

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos); //JSON.parse는 array형태로 만들어주는 함수
    todos = parsedToDos //만약 savedtodos가 있으면 todos array에 복사해서 불러오기
    
    parsedToDos.forEach(paintToDo); //forEach는 array의 각 아이템에 대해 함수적용
} 