function Positionnement (matrice){
    let Max = matrice[0][0]
    let row = 0
    let col = 0 
    for (let i=0 ; i<matrice.length ; i++){
        for(let j=0 ; j<matrice[i].length ; j++ ){
            let nomber = matrice[i][j]
            if(matrice[i][j] > Max){
                Max = matrice[i][j]
                row = i
                col = j
            }
        }
    }
    return {
        value : Max ,
        row : row ,
        col : col
       
    }
}