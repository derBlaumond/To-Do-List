// // Tip 1.
// const age = prompt("How old are you?");
// // 브라우저에 How old are you? 라는 창을 띄워서 입력값을 받는다. 받은 입력값은 age에 할당됨. String
// // 그러나 잘 안씀. bc, 팝업의 제한, html&css 스타일링 불가, 입력 값 받을때 까지 스크립트가 멈춤

// typeof age == typeof(age).. 같은 용도로 쓰임

// parseInt() .. convert from String to Integer 
// const age = parseInt( prompt("How old are you?") ); if not Int, print NaN.

// isNaN(); .. Not a Number 체크하는 법

// js에선 === , !== 를 써야함. (3개!!!!!)

const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age< 0){
    console.log("Please write a positive number!");
}else if(age <18){
    console.log("too young to drink");
}else if(age >= 18 && age <70){
    console.log("hf!")
}else{
    console.log("too old to drink")
}


// setting EventListener on window
function handleWindowCopy(){
    alert("coppied!");
}
function handleWindowOffline(){
    alert("SOS! No connection!")
}
function handleWindowOnline(){
    alert("Cool! Connected!")
}
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("online", handleWindowOnline);
window.addEventListener("offline", handleWindowOffline);


// link.addEventListener("click", handleLinkClick);
// function handleLinkClick(event){
//   event.preventDefault();
// } // handleLinkClick({information about the event that just happened})