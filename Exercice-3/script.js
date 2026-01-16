let user = [
    {
        pseudo: "pseudo1",
        estEnLigne: false
    },
    {
        pseudo:"pseudo2",
        estEnLigne: true
    },
    {
        pseudo:"pseudo3",
        estEnLigne: false
    }
]
for(let i = 0;i < user.length; i++){
    if(user[i].estEnLigne === true){
        console.log(user[i].pseudo + " est connecté")
    }
    else{
        console.log(user[i].pseudo + " est deconnecté")
    }
}
