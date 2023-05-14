let display = document.querySelector("#calculator-display");
let equationDisplay = document.querySelector("#equation-display")

document.querySelector("#button-1").addEventListener("click", dispValue)

document.querySelector("#button-2").addEventListener("click", dispValue)

document.querySelector("#button-3").addEventListener("click", dispValue)

document.querySelector("#button-4").addEventListener("click", dispValue)

document.querySelector("#button-5").addEventListener("click", dispValue)

document.querySelector("#button-6").addEventListener("click", dispValue)

document.querySelector("#button-7").addEventListener("click", dispValue)

document.querySelector("#button-8").addEventListener("click", dispValue)

document.querySelector("#button-9").addEventListener("click", dispValue)

document.querySelector("#minus").addEventListener("click", minus)

document.querySelector("#plus").addEventListener("click", plus)

document.querySelector("#times").addEventListener("click", times)

document.querySelector("#divide").addEventListener("click", divide)

document.querySelector("#equal").addEventListener("click", equals)

document.querySelector("#clear").addEventListener("click", clearScreen)



display.textContent = ''
equationDisplay.textContent = ''
let total = ''

let operatorClickedLast = false




function dispValue() {

    if (display.textContent.length < 15) {
        display.textContent += this.textContent
        total += this.textContent
    }  
    if (operatorClickedLast == true) {
        display.textContent = '';
        display.textContent += this.textContent
        operatorClickedLast = false;
      }
      operatorClickedLast = false
}


function plus() {
    total += '+'
    operatorClickedLast = true;
}

function minus() {
  total += '-'
  operatorClickedLast = true;
}

function times() {
  total += '*'
  operatorClickedLast = true
}

function divide() {
  total += '/'
  operatorClickedLast = true
}

function equals() {
    display.textContent = eval(total)
    equationDisplay.textContent = total
    
}

function clearScreen() {
  if (display.textContent.length > 0) {
    display.textContent = ''
    equationDisplay.textContent = ''
    total = ''
  }
}
    
