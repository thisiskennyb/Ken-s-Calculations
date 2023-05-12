let display = document.querySelector("#calculator-display");

document.querySelector("#button-1").addEventListener("click", dispValue)

document.querySelector("#button-2").addEventListener("click", dispValue)

document.querySelector("#button-3").addEventListener("click", dispValue)

document.querySelector("#plus").addEventListener("click", plus)

// document.querySelector("#equal").addEventListener("click", equals)



display.textContent = ''

let total = []

let operatorClickedLast = false




function dispValue() {

    if (display.textContent.length < 12) {
        display.textContent += this.textContent
    }  
    if (operatorClickedLast == true) {
        display.textContent = '';
        display.textContent += this.textContent
        operatorClickedLast = false;
      }
      operatorClickedLast = false
}



function plus() {
    total.push(display.textContent)
    total.push('+')
    //display.textContent += this.textContent;
    operatorClickedLast = true;
}
    
