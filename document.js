let tableau = ["Number-1", "Number-2", "Number-3"]

const LIST = document.querySelector(".list")

const bouton = document.getElementById("btn")
// console.log(bouton)

const input = document.querySelector("#input1")
// console.log(input)

bouton.addEventListener('click', function (e) {
    tableau.push(input.value)
    input.value = ""
    affichage()
})

function affichage() {
    LIST.innerHTML = ""
    for (let num of tableau) {
        const element = document.createElement("li")
        LIST.appendChild(element)
        element.textContent = num
    }
}
affichage()


