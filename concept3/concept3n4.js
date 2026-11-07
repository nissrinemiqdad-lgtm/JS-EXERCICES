function Tablaeu(Array) {

    let Min = Array[0]
    let Max = Array[0]
    for (let number of Array) {
        if (number < Min) {
            Min = number
        }
        if (number > Max) {
           Max = number
        }
    }
    return{
        min : Min ,
        max : Max
    };
}