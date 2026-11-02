function NumberDuMatrix(matrix) {
    let tableau = []
  for(let i = 0 ; i<matrix.length ; i++){
    for(let j =0 ; j<matrix[i].length ; j++){
        if(matrix[i][j] % 2 === 0){
            tableau.push(matrix[i][j]);
        }
    }
  }
return tableau ;
}
