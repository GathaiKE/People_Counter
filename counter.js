let count = 0
let countEl = document.getElementById("counter-el")
let saveEl = document.getElementById("save-el")

function increment () {
count += 1
countEl.textContent = count
}

function save() {
    let countA = count + " - "
    saveEl.textContent += countA
    countEl.textContent = 0
    count = 0
}