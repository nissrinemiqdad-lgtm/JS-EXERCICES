function MOYENNE(numbers) {
    let somme = 0;
    let moyenne = 0 ;
    for (let number of numbers) {
        somme += number
    }
    moyenne = somme / numbers.length;
    return moyenne
}
