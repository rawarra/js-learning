//if condictions
let badPerson = false;
let knowPerson = "Hello Rajesh";
let friend = false;
let uUnkowPerson = "Hello Rajesh";
let reply;

if(badPerson){
    reply = `Sorry I Do't Talk You Plase Get out`;
}
else if(friend && knowPerson){
    reply = `${knowPerson} Rajesh Relay Hay Hai da How are You`;
}
else if(knowPerson === uUnkowPerson){
    reply = `${knowPerson} Rajesh Relay hay Hai Did You Know Me ?`;
}
else if(knowPerson){
    reply = `${knowPerson} Rajesh Relay Hay Hai`;
}
else{
    reply = `Sorry Did You me ?`
}

console.log(reply);