function SommeNomber(numbers) {
    let tableauPair = [];
    let somme = 0;
    for (let number of numbers) {
        if (number % 2 === 0) {
            tableauPair.push(number)
        }
    }
    for (let num of tableauPair) {
        somme += num

    }
    return somme
}