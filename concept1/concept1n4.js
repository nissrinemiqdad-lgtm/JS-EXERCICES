function getNumbers(numbers) {
  let tableau = []
  for(let number of numbers){
    if(number % 2 !== 0){
        tableau.push(number)  
    }
  }
return tableau
}