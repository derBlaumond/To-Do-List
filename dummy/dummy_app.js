// const title = document.getElementById("title");

// title.innerText = "Gotya!"

// console.dir(title);
// console.log(title.id);
// console.log(title.className);


// const hellos = document.getElementsByClassName("hello");
// console.log("className: " + hellos);

// const hellos2 = document.getElementsByTagName("h1");
// console.log(hellos2);

const h1 = document.querySelector(".hello:first-child h1");
// querySelector takes only first element
// if all elements need, querySelectorAll
console.dir(h1);

function handleTitleclick(){
    // const clickedClass = "clicked";
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // }else{
    //     h1.classList.add(clickedClass);
    // } --> better function below!!
    h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleTitleclick);
