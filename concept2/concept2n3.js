function Moyenne(numbers) {
    let somme = 0
    let moyenne = 0
    numbers.forEach(number => {
        somme += number
    });
    moyenne = somme / numbers.length ;
    return moyenne
}