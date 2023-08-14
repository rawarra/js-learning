// if statment
let custamerIsBand = false;
let webDev = true;
let viwers ="your js videos";
let replay;

if (custamerIsBand){
    replay = `sorry`
}
else if(viwers && webDev){
    replay = `enjoy ${viwers}`;
}

else {
    replay = `sorry still working`
}

console.log(replay)

let student = false;
let studMark = 90;
let grad;
let reply;

if(student){
   
    reply = `Yes your the student = ${student}`;

     if  (studMark>=90){
        grad =`f ${studMark}`;
    }
} 
else{
    reply=`your not a sutdent = ${student}`;
}

console.log(grad);

console.log(reply);
