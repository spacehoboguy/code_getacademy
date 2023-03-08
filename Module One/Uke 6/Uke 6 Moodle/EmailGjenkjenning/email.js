
function recogEmail(Input){

let fixedEmail = Input.replace(" ","")
console.log(fixedEmail);
let atIndex = fixedEmail.indexOf('@')
console.log(atIndex);
if(atIndex > 0){
    return true
}
else{
    return false
}
}