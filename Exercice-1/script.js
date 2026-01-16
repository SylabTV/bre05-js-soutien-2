let note = [12, 15, 8, 19, 10];
let somme = 0
for(let i = 0; i < note.length;i++){
    somme = note[i]+somme
}
let moyenne = somme/note.length
console.log("La moyenne de " + moyenne)

