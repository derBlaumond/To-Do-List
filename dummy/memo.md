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

안에 텍스트를 넣을 거니까, type="text"해주고, 안에 미리 작성할 말은 placeholder 안에 써주기
2. 그리고 옆에 버튼을 만든다.
Log In
3. div태그로 위의 것들 묶어주고, id="login-form"을 해준다.
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

input의 내용을 가져오려면 value라는 property를 찾아봐야 됨.
---
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

-> 이렇게 동작을 하나하나 코딩해주는구나~ 재밌다~
---