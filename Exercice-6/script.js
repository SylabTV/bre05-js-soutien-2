function estAdulte(age) {
    if(age >= 18){
        return true;
    }
    else{
        return false;
    }
}
function formaterMessage(age){
    if(estAdulte(age)===true){
        console.log("Acces autorise");
    }
    if(estAdulte(age)===false){
        console.log("Acces interdit");
    }
}
formaterMessage(20);