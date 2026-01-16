let nombres = [10, 25, 5, 40, 18, 3]


function afficherGrandsNombres(nombres){
    for(let i = 0;i < nombres.length; i++){
        if(nombres[i] > 15){
            console.log(nombres[i])
        }
    }
}
afficherGrandsNombres(nombres);