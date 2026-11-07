function MaxTab(Array) {
    let Max = Array[0]
    for (let number of Array) {
        if (number > Max) {
            Max = number
        }

    }
    return Max
}
