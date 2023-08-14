// if condication

let badPerson = false;
let knows = "hello rajesh";
let friend = false;
let youUnkowPerson ="hello rajeshkumar";
let reply;

if (badPerson){
    reply=`sorry i don't talk you please got out`;
}
else if (knows && friend){

    reply=`${knows} Rajesh reply hey hai da how did you know me ?`;
}

else if (knows === youUnkowPerson){
    reply=`${knows} Rajesh reply is hey how are you ?`;
}
else{
    reply = `sorry did you know me`;
}

console.log(reply);