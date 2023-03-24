## JS ON THE BROWSER

- getElementsByClassName() : classname 할당으로 많은 element를 가져올때 씀(array를 반환)
- getElementsByTagName() : name을 할당할 수 있음(array를 반환)
- querySelector : element를 CSS selector방식으로 검색할 수 있음 (ex. h1:first-child)
  단 하나의 element를 return해줌
- 조건에 맞는 element를 다 가져오고 싶으면 querySelectorAll
- querySelector("#hello); 와 getElementById("hello"); 는 같은 일을 하는 것임
  하지만 후자는 하위요소 가져오는 것을 못하므로 전자만 쓸거다

### events

- document가 html이 js파일을 load하기 때문에 존재 → 그 다음에 browser가 우리가 document에 접근할 수 있게 해줌
- element의 내부를 보고 싶으면 console.dir(). 기본적으로 object로 표시한 element를 보여줌(전부 js object임). element 중 앞에 on이 붙은 것들은 event임
- event: 어떤 행위를 하는 것. 모든 event는 js가 listen할 수 있음
- eventListener : event를 listen함 → js에게 무슨 event를 listen하고 싶은 지 알려줘야 함
- title.addEventListener("click") : 누군가가 title을 click하는 것을 listen할 거임 → 무언가를 해줘야함

const title = document.querySelector("div.hello:first-child h1");
function handleTitleClick(){
title.style.color = "blue";
}
title.addEventListener("click",handleTitleClick);
//click하면 handleTitleClick이라는 function이 동작하길 원함
//그래서 handle~ 함수에 () 를 안넣은 것임. 즉, js가 대신 실행시켜주길 바라는 것임!

- function이 js에게 넘겨주고 유저가 title을 click할 경우에 js가 실행버튼을 대신 눌러주길 바라는 것임( 직접 handleTitleClick(); 이렇게 하는 것이 아니라)
- 함수에서 () 이 두 괄호를 추가함으로써 실행버튼을 누를 수 있는 거임

### CSS in JS

style에 적합한 도구는 CSS
animation에 적합한 도구는 JS

- document의 body,head,title 이런것들은 중요하기 때문에 document.body.style~의 명령이 허용되지만, div같은것들은 호출이 안됨
  나머지 element들은 querySelector나 getElementById로 불러와야됨!!!!!!!

css파일에
h1 {
color: cornflowerblue;
}
.clicked {
color: tomato;
}
를 적고
js에서는 h1에 active class를 전달하는거다.
const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick() {
if(h1.className === "clicked") {
h1.className = "";
} else {
h1.className = "clicked";
}
}
h1.addEventListener("click", handleTitleClick);
여기서 JS는 HTML을 변경할거고, CSS는 HTML을 바라보고 style을 변경한다.
이름을 바꾸다가 에러가 발생할 수도 있다. const로 지정해라.
function handleTitleClick() {
const clickedClass = "clicked";
if(h1.className === clickedClass) {
h1.className = "";
} else {
h1.className = clickedClass;
}
}
이렇게 작성하면 에러가 발생할 수 있는 부분을 축소한다.

그런데, html의 h1에 sexy-font라는 class name이 있었는데 js를 실행하니 교체되었다.
최초의 class name이 사라졌고.., sexy-font라는 class name을 간직하고 싶은데 이건 어떻게 해야하는가.
const clickedClass = "clicked sexy-font";에 추가하면 되긴 하는데 좋은 방법은 아니다. class를 추가할 때마다 js랑 css에서 업데이트를 계속 해야하니까.
우리가 해야하는건 js로 모든 class name을 변경하지 않는거다. 이 sexy-font를 삭제하지 않고 clicked class를 변경하고 싶다는거지.

classList 우리가 class들의 목록으로 작업할수 있게끔 허용해준다.
className은 이전calss를 상관하지않고 모든걸 교체해 버린다.

classList를 이용하는건
js에서 건드리는건 HTML element가 가지고있는 또 하나의 요소 사용하는 것이다.
= element의 class내용물을 조작하는 것을 허용한다는 뜻

contains은 우리가 명시한 class가 HTML element의 class에 포함되어 있는지 말해준다

toggle은 토큰이 존재하면 토큰제거, 토큰존재 하지않으면 토큰 추가
ex) toggle은 h1의 classList에 clicked class가 이미있는지 확인하여 만약있다면 toggle 이 clicked를 제거해준다 만약 class name이 존재하지 않는다면 toggle은 classname 추가

## Login

모든 것은 HTML에서 시작되어야 함. HTML에서 작성하고 자바스크립트로 기능을 구현.
먼저, HTML 코드 작성하기

1. 사용자가 이름을 작성할 수 있도록 input 태그를 작성한다.

안에 텍스트를 넣을 거니까, type="text"해주고, 안에 미리 작성할 말은 placeholder 안에 써주기 2. 그리고 옆에 버튼을 만든다.
Log In 3. div태그로 위의 것들 묶어주고, id="login-form"을 해준다.
왜 div태그로 묶는지 확실히는 모르겠지만, 내 생각에는 둘을 묶은 다음, 저 id를 통해서
자바스크립트에서 내가 원하는 태그들을 쉽게 찾기 위해서 묶어주는 것 같음.

input 안에 뭔가를 작성하고 로그인 버튼을 누르면 저장해야 되니까
자바스크립트로 그 기능 구현하기

그냥 html 태그를 가져올 수 없으니까 변수 안에 넣고 거기서 텍스트 받기

1. const loginInput = document.querySelector("#login-form input");
   const loginButton = document.querySelector("#login-form button");

document 안에서 찾기. id="login-form"인 곳에서 input요소를 loginInput 안에 넣어주기

2. 버튼을 클릭하면, 내가 작성한 값을 콘솔에 보여주는 기능

loginButton.addEventListener("click, onLoginBtnClick);

3. 함수 만들기
   function onLoginBtnClick(){
   console.log(loginInput.value);
   }

## input의 내용을 가져오려면 value라는 property를 찾아봐야 됨.

function onLoginSubmit(event){
event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기
// event object는 preventDefault함수를 기본적으로 갖고 있음
console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit); // submit 이벤트가 발생한다면, onLoginSubmit함수를 실행시킨다는 의미 // JS는 onLoginSubmit함수 호출시 인자를 담아서 호출함. 해당 인자는 event object를 담은 정보들

★ 중요 ★
form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다. << 우리가 원하는 것이 아님!
preventDefault() 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있다!!

이 preventDefault 함수는 EventListener 함수의 '첫 번째 argument' 안에 있는 함수이다. 첫 arument는 지금 막 벌어진 event들에 대한 정보를 갖고 있다.
JS는(기본적으로)argument를 담아서 함수를 호출하는데, 이 argument가 기본 정보들을 제공하고 있다. ex) 누가 submit주체인지, 몇 시에 submit을 했는지 등등 콘솔에 출력해보면 알 수 있음

---

addEventListener 안에 있는 함수는 직접 실행하지 않는다
브라우저가 실행시켜주고
브라우저에서 해당 이벤트에 대한 정보 즉, object를 가지게 된다.
addEventListener의 함수에서 object에 대한 자리만 할당해주면
해당 이벤트가 발생시킨 정보들에 대한 object들을 볼 수 있다!
이때 해당 이벤트가 가진 기본 Default값을 발생시키지 않기 하게 위해선 preventDefault를 이용하여 막을 수 있다!

---

const HIDDEN_CLASSNAME = 'hidden';
관습: string만 포함된 변수는 대문자로 쓴다 + 중요한 변수가 아니라 서.

'hello!' + username + nice to meet you!; 는
`hello ${username} nice to meet you `; 와 같으며 후자의 방법 사용하자.

HTML의 어느 한 부분을 잡고 거기에 class 를 추가하거나 빼고 싶을 때는
classList.add.('classname')
classList.remove.('classname') 를 사용한다. 클래스를 마음대로 붙였다 뗄 수 있게 해준다. 위에서는 display:none;이 되어 있기 때문에 해당 html 태그(?)를 hide or show 할 수 있다.

이 강의에서 한 것.

1. 클릭하면, 자동으로 새로고침 되어 정보가 날아가는 것을 막고(preventDefault();)
2. loginForm을 감추고(hidden)
3. hidden 됐던 A 문구가 나타나고(remove hidden)
4. A 문구와 username을 합쳐서 완전한 문구를 완성한다.

---

lcoalStorage 브라우저에 무언가를 저장한 후 나중에 가져 올 수 있음.
lcoalStorage.setItem("username", "nico");
lcoalStorage.getItem("username")
lcoalStorage.removeItem("username")

## CLOCK

setInterval(sayHello, 1000);
sayHello() 라는 펑션을 1초마다 반복한다는 의미.
단 바로 실행되지 않고 1초 후 첫 시작이 되고 계속 1초마다 반복된다.
setTimeout(sayHello, 1000);
1초 기다렸다가 한번만 실행.

---

function getClock() {
const date = new Date();
const hours = String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");
const seconds = String(date.getSeconds()).padStart(2, "0");
clock.innerText =`${hours}:${minutes}:${seconds}`;
}

---

## Quotes

1. Math 객체 기능
   Math.random() 0부터 1사이 무작위의 값을 반환해줌
   Math.floor() 내림
   Math.ceil() 올림
   Math.round() 반올림

2. JS에서 html 요소를 생성
   createElement(" ")
   예를 들어,
   document.createElement("img")일 경우 html 내에 img 태그를 생성

appendChild()
// 함수 안의 경로에 정의한 값을 가장 뒤에서 기입함
prependChild()
// 반대로 앞에서 기입

## TO-Do List

1. html

1) Todo-list 를 만들기를 원하니 html 에 form 태그로 구조를 만들어 준다. 나중에 JavaScript에서 만지기 쉽게 id는 todo-form으로 설정
2) form 자체는 submit이라는 기본 기능을 내장하는 하나의 묶음 밖에 되지 않는다. 우리는 이용자가 todo-list 에 무언가 기입하는 것을 원하기 때문에 form 태그 안에 input 태그를 넣어 'text'를 타이핑할 수 있는 기능을 추가한다.
3) 그 밑에 ul 태그를 생성하여 todo-list에 작성 된 text가 저장 및 나열될 수 있게 한다.

2. JavaScript

1) 앞에 html에서 만든 구조 3가지 ('todo-form', 'todo-form 안의 input', 'todo-list') 에 접속하기 위해 항상 길게 타이핑하는 것은 비효율적이므로 단축을 위해 각각 변수로 설정한다.
2) 이전 greeting 강의에서 form 태그에서의 event는 submit를 발생시키고, 브라우저는 기본값으로 설정되어 있는 새로고침을 하게 된다. 우리는 todo-list를 작성한다고 새로고침 되는 것을 원치 않기 때문에(todo-list를 1,000번 작성한다고 가정한다면 불필요한 새로고침이 1,000번 발생하고 1,000번의 랜덤한 이미지가 로드될 것이다. -> 데이터적으로 비효율적, 시각적으로 불편)
   event.preventDefault() 로 기본값을 없애준다.
3) text 상자 안에 글을 작성하고 enter를 눌렀을 때 그 글이 초기화 되게 만들기 위해 toDoInput.value = ""; 을 통해 value를 빈 텍스트로 한다.
4) text 상자를 비게 하는 것은 좋은데 그 전에 이용자가 입력한 텍스트를 저장해야 나중에 ul태그 안에 사용할 수 있기 때문에 toDoInput.value = ""; 로 기입한 텍스트가 사라지기 이전에
   const newTodo = toDoInput.value; 를 정의하여 기입한 텍스트가 newTodo라는 값에 저장되게 한다.
5) 앞의 세 가지 동작(기본값방지, 텍스트 저장, text상자비우기)는 한번에 이루어지는 세트이기때문에 효율성 및 편의를 위해 함수로 묶어준다.
   function handleTodoSubmit() {
   event.preventDefault();
   const newTodo = toDoInput.value;
   toDoInput.value = "";
   }
6) todo-form 안에서 submit이 발생하는 특정 상황에서 함수handleTodoSubmmit을 실행 시키기 위해
   toDoform.addEventListner("submit", handleTodoSubmit); 을 기입한다.
   (함수 handleTodoSubmit이 항상 실행되고 있는 상태라면 text 창은 항상 비어있는 상태 일 것이기 때문에)

---

0. 이전 영상에서 우린 hadle.ToDoSubmit() 함수를 만들어

1) event.preventDefault(); // 새로고침을 막고
2) const newTodo = toDoInput.value; // submit하는 텍스트를 저장하고
3) toDoInput.value = ""; // 텍스트상자 안의 텍스트를 초기화시켰다.

이제 우린 방금 전 입력한 텍스트가 페이지에서 보여지는 것을 원하기 때문에 그에 맞는 코드를 작성할 것이다.

1. html 돌아보기
   우린 이미 html에 todo-list라는 id를 가진 ul태그를 작성해 놓았고, 새로운 텍스트가 입력 될 때마다 그 안에 li 태그를 생성하여 나열하고 싶다. 이것을 JS에서 관여할 수 있도록 코드를 짜는 것이 필요하다.

2. JavaScript - todo list를 웹페이지에서 시각화하기

1) const li = document.createElement("li"); // li를 입력했을 때 html에서 li태그를 생성하게 명령한다.
2) const span = document.createElement("span"); // span이 정확히 왜 필요한지는 아직 잘 모르겠지만, 니꼬의 말에서 유추해보면 나중에 리스트 삭제 시 필요한가보다. 아무튼 span이라는 const가 html 내에서 span태그를 만들게끔 한다.
3) li.appendChild(span); // li 태그 안에 자식을 span 태그로 하게끔 한다. 아직 span을 굳이 왜 만드는지는 정확히 이해 x

4) span.innerText = newTodo; // span이라는 태그 안의 텍스트가 앞에서 설정한 new Todo라는 객체가 되도록 한다. newTodo는 텍스트에 입력한 value값
   ex) 텍스트 상자 안에 "안녕하세요"라고 입력하면 newTodo는 "안녕하세요"이므로 span안의 텍스트는 "안녕하세요"가 될 것이다.
5) toDoList.appendChild(li); // html의 ul 태그 안에 li 를 속하게 한다. (span을 li에 속하게 한 것과 동일)

3. 함수 piantTodo(newTodo)를 함수 handleTodoSubmit()에 추가
   우리가 텍스트를 기입하고 submit 할 때마다 원하던 기능들을 실행시키기 위해 위에서 만든 함수 paintTodo(nweTodo)를 함수 handleTodoSubmit()에 추가한다.
   기존 함수 handleToDoSubmit()가 텍스트 상자 안의 텍스트를 초기화하는 기능까지만 했다면, paintToDo(newTodo)추가 후에는 제출한 텍스트를 매번 html의 ul안에서 li태그와 그 안에 속하는 span 태그를 만들고 span에 텍스트로 남겨 웹 화면에서 보일 수 있는 것 까지 되게 한다.

4. 하지만 우리가 만든 todo list 는 아직 삭제를 하지 못하고, 새로고침시 초기화 되어 화면의 todo list가 날라가 버린다. 다음 영상에서는 니꼬가 이 부분에 대해 알려줄 것 같다. 아무래도 이전에 배웠던 조건문 if를 이용한 tag 삭제 or 생성 그리고 생성된 span value를 localStorage에 저장 하는 방식으로 진행하지 않을까 싶다.

---

< JavaScript 입문자가 바라본 #7.2 >

0. #7.1 에서 우리는 기입한 텍스트를 화면에서 보이게 하는 코드까지 작성해보았다! 이제 그 텍스트를 내가 원할 때 지울 수 있게끔 니꼬를 따라가보자

1. JS에서 html 내부에 button 태그 만들기

1) const button = document.createElement("button"); // html에 button 태그를 생성할 수 있도록 button이라는 객체 정의
2) button.innerText = "❌"; // 사용자가 버튼을 누르면 텍스트가 삭제되는 기능이 있다는 것을 인식시키기 위해 버튼 내부 텍스트를 "❌"로 정의 (윈도우 기준: window 키 + . )

3) button.addEventListener("click", deleteToDo); // 버튼에서 이벤트가 발생했을 때 삭제 기능을 담당하는 함수가 실행되도록 한다. 여기에선 "click"이 발생 시, deleteToDo함수가 실생되도록 함

2. 삭제 기능을 담당하는 함수 생성

1) const li = event.target.parentElement; // 이벤트가 발생했들때.해당객체를지정하여.그것의부모태그를지정;
2) li.remove(); // 위에서 지정된 것을 삭제;

3. 정리하면

1) button.addEventListener("click", deleteToDo); 에서 클릭이 발생하면 deleteToDo함수가 실행된다.
2) function deleteToDo(event) { const li = event.target.parentElement; li.remove(); }

---

< JavaScript 입문자가 본 #7.3 >

0. 이전 영상에서 우리는 추가와 삭제가 가능한 멋진 todo-list를 화면에 구현했다..!
   하지만 새로고침을 하거나 이용자가 누구인가와 관계없이 똑같은 todo-list가 나온다면 우리는 todo-list를 그 때마다 계속해서 작성해야할 것이다. 만약 todo-list를 1,000개 작성했는데 단숨에 날라간다면...? 그건 어딘가 부족한 todo-list 일 거다. 그래서 우린 todo-list에 나타낸 텍스트를 저장하는 기능이 필요하다.

1. todo - list의 배열 생성

1) const toDos = [ ]; // toDo에 들어오는 텍스트를 배열로 묶어 보관하기 위해 빈 array를 생성해준다.

2. 저장 기능을 함수를 정의한다.

1) 아직 기능을 하진 않지만 우리는 화면에 나타낸 텍스트를 저장할 것이기 때문에 대충 그러한 기능을 하는 함수가 있다고 치고 빈 함수
   function saveToDos( ) {
   };
   를 생성한다.
2) 앞에서 만들었던 함수 handleToDosubmut( ); 의 맨 마지막에 저장 기능을 실행할 saveToDos(); 넣어두고 다음에서 기능을 구현한다.

3. todo - list를 저장하는 기능을 수행하는 함수 설정

1) function saveToDos( ) { localStorage.setItem("todos",toDos); } 에 "todos"라는 이름의 카테고리로 저장한다.
2) 하지만 이렇게 저장하게 되면 직접 localStorage 에서 확인해봤을 때 값들이 array안에서
   string의 형태가 아닌 상태로 저장된다.
   예) key: todos value: a,b,c
3) 하지만 우리는 값들을 string의 형태로 toDos라는 array에 집어넣고 싶기 때문에 니꼬가 알려준 JSON.stringify() 라는 객체를 사용한다. 이 도구는 우리가 대입한 값을 알아서 string의 형태로 바꿔줄 것이다.
   예) key: todos value: ["a", "b", "c"]

---
