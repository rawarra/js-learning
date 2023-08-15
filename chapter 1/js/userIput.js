// let rajesh = confirm("hello rajesh");

let rajesh = prompt("Enater your name");

if (rajesh){
    console.log(rajesh ?? "you did not enter the name");
}else{
    console.log("you did not enter your name");
}

console.log(rajesh.length)