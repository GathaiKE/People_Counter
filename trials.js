let num1 = document.getElementById("num1-el").textcontent = 10
let num2 = document.getElementById("num2-el").textcontent = 5
let sumEl = document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    sumEl.textcontent = "Sum: " + result
}

function subtract() {
    result = num1 - num2
    sumEl.textcontent = "Difference: " + result
}

function multiply() {
    result = num1 * num2
    sumEl.textcontent = "Product: " + result
}

function divide() {
    result = num1 / num2
    sumEl.textcontent = "Quotient: " + result
}