//Student Results Report
let studScroe = 90;
let gread;
let collegStd = false;

if(studScroe>=90){
    gread = `A`;
} 
else if(studScroe>=70){
    gread = `B`;
}
else if(studScroe>=60){
    gread = `c`;
}
else{
    if(collegStd){
        gread=`RA`
    }else {
    gread = `F`
}
}

console.log(gread);

//switch case

let Player ="rock";
let computer ="sicer";

switch (Player) {
    case computer:
        console.log("Tie !")
        break;

    case "rock":
        if (computer === "sicer"){
            console.log("Player is Win")
        }else{
        console.log("computer is win")
        }
        break;

    default:
        console.log("No Tie")
        break;
}