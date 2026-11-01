function averageEvenMatrix(matrix) {
    let pair = []
    let somme = 0
    let moyenne = 0;
    for (let ligne of matrix) {
        for (let number of ligne) {
            if (number % 2 === 0) {
                pair.push(number)
            }
        }
    }
    if(pair.length === 0 ){
        return null
    }
    for (let num of pair) {
        somme += num
    }
    moyenne = somme / pair.length
    return moyenne
}
