// const title = document.getElementById("title");

// title.innerText = "Gotya!"

// console.dir(title);
// console.log(title.id);
// console.log(title.className);


// const hellos = document.getElementsByClassName("hello");
// console.log("className: " + hellos);

// const hellos2 = document.getElementsByTagName("h1");
// console.log(hellos2);

const title = document.querySelector(".hello:first-child h1");
// querySelector takes only first element
// if all elements need, querySelectorAll
console.dir(title);

function handleTitleclick(){
    title.style.color = "red";
    console.log("It was clicked!")    
}
function handleMouseEnter(){
    title.innerText = "Yes! Click Me!";
}
function handleMouseLeave(){
    title.innerText = "No! Come back and click me!"
}

title.addEventListener("click", handleTitleclick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);