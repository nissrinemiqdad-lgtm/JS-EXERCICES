function PairMatrice(matrice) {
    let somme = 0
    let PairNomber = []
    let moyenne = 0
    for (let i = 0; i < matrice.length; i++) {
        for (let j = 0; j < matrice[i].length; j++) {
            if( matrice[i][j] % 2 === 0){
               PairNomber.push(matrice[i][j])
            }
            
        }
    }
    if(PairNomber.length == 0){
        return null
    }
    else{
        for(let number of PairNomber){
            somme += number
        }
        moyenne = somme /PairNomber.length
        return moyenne
    }
    
}