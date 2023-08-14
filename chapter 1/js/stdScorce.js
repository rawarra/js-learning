//Student Results Report

let stdScore=50;
let gread;
let collegeStd=false;

if (stdScore>=100){
    gread = `A`;
}
else if (stdScore>=88){
    gread = `B`;
}
else if (stdScore>=60){
    gread = `c`;
}
else {
    if(collegeStd){
        gread=`RA This college Students ${collegeStd}` ;
    }
    else {
    gread = `F`;
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