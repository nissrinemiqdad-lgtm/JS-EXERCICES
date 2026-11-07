function Matrice(matrix) {
    let tab = []
   
    for (let i = 0; i < matrix.length; i++) {
         let somme = 0
        for (let j = 0; j < matrix[i].length; j++) {
            somme += matrix[i][j]
        } 
        tab.push(somme)
    }
    return tab
}