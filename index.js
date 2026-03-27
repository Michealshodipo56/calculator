// Variable to store the current calculation string
let cal = '';
/**
 * Appends a number or operator to the calculation string and updates the display.
 */
function num(add){
    cal += add;
    document.querySelector('.display').innerHTML = cal;
}

/**
 * Clears the display content.
 */
function erase(){
    document.querySelector('.display').innerHTML = '';
}

/**
 * Evaluates the calculation string and displays the result.
 */
function total(){
    document.querySelector('.display').innerHTML= eval(cal);
}

/**
 * Removes the last character from the calculation string and updates the display.
 */
function backspace(){
    cal = cal.slice(0, -1);
    document.querySelector('.display').textContent = cal;
}
